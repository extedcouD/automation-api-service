import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import { createAuthHeader } from "../utils/headerUtils";

export class CommunicationService {
	forwardApiToMock = async (body: any, action: string) => {
		const url = process.env.MOCK_SERVER_URL;
		const response = await axios.post(`${url}/${action}`, body);
		return response.data;
	};
	forwardApiToNp = async (body: any, action: string) => {
		const context: BecknContext = body.context;
		const finalUri = context.action.startsWith("on_")
			? context.bap_uri
			: context.bpp_uri;
		const header = await createAuthHeader(body);
		const response = await axios.post(`${finalUri}/${action}`, body, {
			headers: {
				Authorization: header,
			},
		});
		if (response.status !== 200) {
			logger.info("NP DID NOT RESPOND WITH 200 STATUS CODE");
		}
	};
}
