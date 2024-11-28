import { setAckResponse } from "../utils/ackUtils";
import { Request, Response } from "express";
import logger from "../utils/logger";
import { CommunicationService } from "../services/forwarding-service";

export class CommunicationController {
	communicationServce: CommunicationService;
	constructor() {
		this.communicationServce = new CommunicationService();
		console.log(
			"Communication Controller initialized",
			this.communicationServce
		);
	}
	forwardToMockServer = async (req: Request, res: Response) => {
		try {
			await new CommunicationService().forwardApiToMock(
				req.body,
				req.params.action
			);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			res.status(200).send(setAckResponse(true));
			logger.error("Error in forwarding request to mock server", error);
		}
	};
}
