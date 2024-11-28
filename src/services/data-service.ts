import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";

export class DataService {
	SaveToPresistantDB = async (
		context: BecknContext,
		payload: any,
		dbUrl: string
	) => {
		const save_data = {
			messageId: context.message_id,
			transactionalId: context.transaction_id,
			action: context.action.toUpperCase(),
			payload: payload,
			bppId: context.bpp_id ?? null,
			bapId: context.bap_id,
		};
		const url = `${dbUrl}/payload`;
		console.log("Saving data to DB", url, save_data);
		const res = await axios.post(url, save_data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		logger.info("Data saved to DB", res.data);
	};
}
