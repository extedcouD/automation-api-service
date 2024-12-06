import { setAckResponse, setIneternalServerNack } from "../utils/ackUtils";
import { Request, Response } from "express";
import logger from "../utils/logger";
import { CommunicationService } from "../services/forwarding-service";
import { BecknContext } from "../models/beckn-types";

export class CommunicationController {
	communicationServce: CommunicationService;
	constructor() {
		this.communicationServce = new CommunicationService();
	}
	forwardToMockServer = async (req: Request, res: Response) => {
		try {
			await new CommunicationService().forwardApiToMock(
				req.body,
				req.params.action
			);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			res.status(200).send(setIneternalServerNack);
			logger.error("Error in forwarding request to mock server", error);
		}
	};

	handleRequestFromMockServer = async (req: Request, res: Response) => {
		try {
			const context: BecknContext = req.body.context;
			const bpp_uri = context.bpp_uri;
			if (bpp_uri) {
				const response = await this.communicationServce.forwardApiToNp(
					req.body,
					req.params.action
				);
				res.status(response.status).send(response.data);
				return;
			}
			await this.communicationServce.forwardApiToGateway(req.body);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			res.status(200).send(setIneternalServerNack);
			logger.error("Error in handling request from mock server", error);
		}
	};

	private forwardToNpServer(req: Request, res: Response) {
		try {
			this.communicationServce.forwardApiToNp(req.body, req.params.action);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			res.status(200).send(setIneternalServerNack);
			logger.error("Error in forwarding request to NP server", error);
		}
	}

	private forwardToGateway = async (req: Request, res: Response) => {
		try {
			const response = await this.communicationServce.forwardApiToGateway(
				req.body
			);
			res.status(response.status).send(response.data);
		} catch (error) {
			res.status(200).send(setIneternalServerNack);
			logger.error("Error in forwarding request to Gateway", error);
		}
	};
}
