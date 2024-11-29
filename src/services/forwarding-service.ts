import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";

export class CommunicationService {
	forwardApiToMock = async (body: any, action: string) => {
		const url = process.env.MOCK_SERVER_URL;
		const response = await axios.post(`${url}/${action}`, body);
		return response.data;
	};
	forwardApiToNp = async (body: any, action: string) => {
		const context: BecknContext = body.context;
		const mockUri = process.env.MOCK_SERVER_URL;
		const bapUri = context?.bap_uri;
		const bppUri = context?.bpp_uri;
		const finalUri = mockUri === bapUri ? bppUri : bapUri;
		const response = await axios.post(`${finalUri}/${action}`, body);
		if (response.status !== 200) {
			logger.info("NP DID NOT RESPOND WITH 200 STATUS CODE");
		}
	};
}
