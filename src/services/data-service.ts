import axios from "axios";
import { BecknContext } from "../models/beckn-types";

export class DataService {
	async SaveToPresistantDB(context: BecknContext, payload: any, dbUrl: string) {
		const save_data = {
			messageId: context.message_id,
			transactionId: context.transaction_id,
			action: context.action.toUpperCase(),
			payload: payload,
			bppId: context.bpp_id,
			bapId: context.bap_id,
		};
		await axios.post(`${dbUrl}/paylod`, save_data);
	}
}
