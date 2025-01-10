import { setAckResponse, setInternalServerNack } from "../utils/ackUtils";
import e, { Request, Response } from "express";
import logger from "../utils/logger";
import { CommunicationService } from "../services/forwarding-service";
import { BecknContext } from "../models/beckn-types";
import { computeSubscriberUri } from "../utils/subsciber-utils";
import { loadData } from "../utils/data-utils/cache-utils";

export class CommunicationController {
	communicationService: CommunicationService;

	constructor() {
		this.communicationService = new CommunicationService();
	}

	forwardToMockServer = async (req: Request, res: Response) => {
		try {
			await new CommunicationService().forwardApiToMock(
				req.body,
				req.params.action
			);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			logger.error("Error in forwarding request to mock server", e);
			res.status(200).send(setInternalServerNack);
		}
	};

	handleRequestFromMockServer = async (req: Request, res: Response) => {
		try {
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
			const subUrl =
				(req.query.subscriber_url as string) ??
				computeSubscriberUri(context, req.params.action, true);
			const sessionData = await loadData(subUrl);
			logger.debug(sessionData.difficulty_cache);
			const useGateway = sessionData.difficulty_cache.useGateway ?? true;
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
			res.status(200).send(setInternalServerNack);
			logger.error("Error in handling request from mock server", error);
		}
	};
}
