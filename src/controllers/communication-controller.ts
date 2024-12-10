import {setAckResponse, setIneternalServerNack} from "../utils/ackUtils";
import {Request, Response} from "express";
import logger from "../utils/logger";
import {CommunicationService} from "../services/forwarding-service";
import {BecknContext} from "../models/beckn-types";
import {savePayloadData} from "../utils/data-utils/cache-utils";
import {computeSubsciberUri} from "../utils/subsciber-utils";
import {DataService} from "../services/data-service";

export class CommunicationController {
    communicationServce: CommunicationService;

    constructor() {
        this.communicationServce = new CommunicationService();
    }

    forwardToMockServer = async (req: Request, res: Response) => {
        const context = req.body.context;
        const action = req.params.action;
        const subscriberUrl = computeSubsciberUri(context, action, false);
        try {
            const response = await new CommunicationService().forwardApiToMock(
                req.body,
                req.params.action
            );
            await savePayloadData(context, response.data, subscriberUrl);
            new DataService().saveSessionToDB(subscriberUrl, req.body, response.data, 200);
            res.status(200).send(setAckResponse(true));
        } catch (error) {
            await savePayloadData(context, setIneternalServerNack, subscriberUrl);
            res.status(200).send(setIneternalServerNack);
            logger.error("Error in forwarding request to mock server", error);
        }
    };

    handleRequestFromMockServer = async (req: Request, res: Response) => {
        try {
            const context: BecknContext = req.body.context;
            const subscriberUrl = req.query.subscriberUrl as string ?? computeSubsciberUri(req.body.context, req.params.action, true);
            const bpp_uri = context.bpp_uri;
            if (bpp_uri) {
                const response = await this.communicationServce.forwardApiToNp(
                    req.body,
                    req.params.action
                );
                logger.debug("replying to mock`");
                await savePayloadData(context, response.data, subscriberUrl);
                new DataService().saveSessionToDB(subscriberUrl, req.body, response.data, response.status);
                res
                    .status(200)
                    .send(
                        setAckResponse(
                            response.status === 200,
                            "did not get 200 from NP",
                            "10001"
                        )
                    );
                return;
            }
            const response = await this.communicationServce.forwardApiToGateway(req.body);
            await savePayloadData(context, response.data, subscriberUrl);
            new DataService().saveSessionToDB(subscriberUrl, req.body, response.data, response.status);
            res.status(200).send(setAckResponse(true));
        } catch (error) {
            res.status(200).send(setIneternalServerNack);
            logger.error("Error in handling request from mock server", error);
        }
    };
}
