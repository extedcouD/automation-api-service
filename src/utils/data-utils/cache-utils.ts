import { RedisService } from "ondc-automation-cache-lib";
import { BecknContext } from "../../models/beckn-types";

type TrasactionData = {
	latestTimestamp: string;
	latestAction: string;
	bap_id: string;
	bap_uri: string;
	message_ids: string[];
};

export async function saveContextData(context: BecknContext) {
	if (context.action === "search") {
		const action = context.action;
		const timestamp = context.timestamp;
		const saveData: TrasactionData = {
			latestTimestamp: timestamp,
			latestAction: action,
			bap_id: context.bap_id,
			bap_uri: context.bap_uri,
			message_ids: [context.message_id],
		};
		if (await RedisService.keyExists(context.transaction_id)) {
			throw new Error("Transaction ID already exists");
		}
		await RedisService.setKey(context.transaction_id, JSON.stringify(saveData));
	} else {
		const data = await loadData(context.transaction_id);
		data.latestAction = context.action;
		data.latestTimestamp = context.timestamp;
		data.message_ids.push(context.message_id);
		await RedisService.setKey(context.transaction_id, JSON.stringify(data));
	}
}

export async function loadData(transactionId: string) {
	if (await RedisService.keyExists(transactionId)) {
		const data = await RedisService.getKey(transactionId);
		return JSON.parse(data ?? "{}") as TrasactionData;
	}
	throw new Error("Transaction ID not found");
}
