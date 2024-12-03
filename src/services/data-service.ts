import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";

export class DataService {
	saveRequestToDB = async (
		context: BecknContext,
		payload: any,
		dbUrl: string
	) => {
		console.log(typeof payload);
		const save_data = {
			messageId: context.message_id,
			transactionId: context.transaction_id,
			action: context.action.toUpperCase(),
			jsonObject: payload,
			bppId: context.bpp_id ?? null,
			bapId: context.bap_id,
			type: "REQUEST",
			httpStatus: 200,
		};
		const url = `${dbUrl}/payload`;
		console.log("Saving data to DB", url, JSON.stringify(payload));
		const res = await axios.post(url, save_data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		logger.info("Data saved to DB", res.data);
	};
}
