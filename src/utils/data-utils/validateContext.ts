import { RedisService } from "ondc-automation-cache-lib";
import { loadData } from "./cache-utils";

export async function performContextValidations(action: string, body: any) {
	if (action === "search") {
		return {
			valid: true,
		};
	}
	console.log(await RedisService.keyExists(body.context.transaction_id));
	if (!(await RedisService.keyExists(body.context.transaction_id))) {
		return {
			valid: false,
			error: "Transaction ID not found",
		};
	}
	const data = await loadData(body.context.transaction_id);
	console.log(data);

	if (action.startsWith("on_")) {
		if ("on_" + data.latestAction != action) {
			return {
				valid: false,
				error: "received action is not the expected action",
			};
		}
	}
	if (data.bap_id !== body.context.bap_id) {
		return {
			valid: false,
			error: "bap_id does not match",
		};
	}
	if (data.bap_uri !== body.context.bap_uri) {
		return {
			valid: false,
			error: "bap_uri does not match",
		};
	}
	if (data.message_ids.includes(body.context.message_id)) {
		return {
			valid: false,
			error: "message_id is not unique",
		};
	}

	if (data.latestTimestamp > body.context.timestamp) {
		return {
			valid: false,
			error: "Timestamp is not the latest",
		};
	}

	return {
		valid: true,
	};
}
