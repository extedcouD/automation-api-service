import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import { createAuthHeader } from "../utils/headerUtils";
import { config } from "../config/registryGatewayConfig";
import { getAxiosErrorMessage } from "../utils/axiosUtils";

export class CommunicationService {
	forwardApiToMock = async (body: any, action: string) => {
		const url = process.env.MOCK_SERVER_URL;
		logger.debug("Forwarding request to mock server", url, action);
		return await axios.post(`${url}/${action}`, body);
	};
	forwardApiToNp = async (body: any, action: string) => {
		const context: BecknContext = body.context;
		const finalUri = context.action.startsWith("on_")
			? context.bap_uri
			: context.bpp_uri;
		logger.info("Forwarding request to NP server", finalUri);

		const header = await createAuthHeader(body);
		try {
			const response = await axios.post(`${finalUri}/${action}`, body, {
				headers: {
					Authorization: header,
				},
			});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			logger.error("Error in forwarding request to NP server");
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};

	forwardApiToGateway = async (body: any) => {
		const url = config.gateway.STAGING;
		const header = await createAuthHeader(body);
		try {
			logger.info("Forwarding request to Gateway server", url);
			const response = await axios.post(`${url}search`, body, {
				headers: {
					Authorization: header,
				},
			});
			logger.info(JSON.stringify(response.data));
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			logger.error("Error in forwarding request to Gateway server");
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};
}
