import { CommunicationService } from "../services/forwarding-service";
import { setAckResponse } from "../utils/ackUtils";
import { Request, Response } from "express";
export class CommunicationController {
	communicationServce: CommunicationService;
	constructor() {
		this.communicationServce = new CommunicationService();
	}
	async ForwardToMockServer(req: Request, res: Response) {
		try {
			await this.communicationServce.forwardApiToMock(
				req.body,
				req.params.action
			);
			res.status(200).send(setAckResponse(true));
		} catch (error) {
			res.status(500).send("Failed to forward request to Mock Server");
		}
	}
}
