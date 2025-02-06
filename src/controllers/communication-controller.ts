import { setAckResponse, setInternalServerNack } from "../utils/ackUtils";
import e, { Request, Response } from "express";
import logger from "../utils/logger";
import { CommunicationService } from "../services/forwarding-service";
import { BecknContext } from "../models/beckn-types";
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { loadData } from "../utils/data-utils/cache-utils";
import { ApiServiceRequest } from "../types/request-types";

export class CommunicationController {
	communicationService: CommunicationService;

	constructor() {
		this.communicationService = new CommunicationService();
	}

	forwardToMockServer = async (req: ApiServiceRequest, res: Response) => {
		res.status(200).send(setAckResponse(true));
		try {
			await new CommunicationService().forwardApiToMock(
				req.body,
				req.requestProperties
			);
			logger.info("Forwarded request to mock server");
		} catch (error) {
			logger.error("Error in forwarding request to mock server", error);
		}
	};

	handleRequestFromMockServer = async (
		req: ApiServiceRequest,
		res: Response
	) => {
		try {
			if (!req.requestProperties) {
				logger.error("[FATAL]: Request properties not found");
				res.status(200).send(setInternalServerNack);
				return;
			}
			const context: BecknContext = req.body.context;
			const bpp_uri = context.bpp_uri;
			if (bpp_uri) {
				logger.info("Forwarding request to NP server");
				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action
				);
				res.status(response.status).send(response.data);
				return;
			}
			const subUrl = req.requestProperties.subscriberUrl;
			const useGateway = req.requestProperties.difficulty.useGateway;
			if (useGateway) {
				logger.info("Forwarding request to Gateway server");
				const response = await this.communicationService.forwardApiToGateway(
					req.body
				);
				res.status(response.status).send(response.data);
				return;
			} else {
				logger.info("Forwarding request to NP server");
				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action,
					subUrl
				);
				res.status(response.status).send(response.data);
				return;
			}
		} catch (error) {
			logger.error("Error in handling request from mock server", error);
			res.status(200).send(setInternalServerNack);
		}
	};
}
