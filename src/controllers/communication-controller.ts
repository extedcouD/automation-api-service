import {setAckResponse, setIneternalServerNack} from "../utils/ackUtils";
import {Request, Response} from "express";
import logger from "../utils/logger";
import {CommunicationService} from "../services/forwarding-service";
import {BecknContext} from "../models/beckn-types";
import {computeSubscriberUri} from "../utils/subsciber-utils";


export class CommunicationController {
    communicationService: CommunicationService;

    constructor() {
        this.communicationService = new CommunicationService();
    }

    forwardToMockServer = async (req: Request, res: Response) => {
        const context = req.body.context;
        const action = req.params.action;
        const subscriberUrl = computeSubscriberUri(context, action, false);
        try {
            await new CommunicationService().forwardApiToMock(
                req.body,
                req.params.action
            );
            res.status(200).send(setAckResponse(true));
        } catch (error) {
            logger.error("Error in forwarding request to mock server", error);
            res.status(200).send(setIneternalServerNack);
        }
    };

    handleRequestFromMockServer = async (req: Request, res: Response) => {
        try {
            const context: BecknContext = req.body.context;
            const bpp_uri = context.bpp_uri;
            if (bpp_uri) {
                const response = await this.communicationService.forwardApiToNp(
                    req.body,
                    req.params.action
                );
                res
                    .status(response.status)
                    .send(
                        response.data
                    );
                return;
            }
            const response = await this.communicationService.forwardApiToGateway(req.body);
            res.status(response.status).send(response.data);
        } catch (error) {
            res.status(200).send(setIneternalServerNack);
            logger.error("Error in handling request from mock server", error);
        }
    };
}
