import { RedisService } from "ondc-automation-cache-lib";
import { BecknContext } from "../../models/beckn-types";
import { SessionData } from "../../types/session-types";

export async function saveContextData(
	context: BecknContext,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	const contextdata = sessionData.context_cache;
	contextdata.latest_action = context.action;
	contextdata.latest_timestamp = context.timestamp;
	contextdata.message_ids.push(context.message_id);
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function savePayloadData(
	context: BecknContext,
	response: any,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	if (
		!Array.isArray(sessionData.session_payloads[sessionData.current_flow_id])
	) {
		sessionData.session_payloads[sessionData.current_flow_id] = [];
	}
	sessionData.session_payloads[sessionData.current_flow_id].push({
		request: JSON.stringify(context),
		response: JSON.stringify(response),
	});
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function loadData(sessionID: string) {
	if (await RedisService.keyExists(sessionID)) {
		const data = await RedisService.getKey(sessionID);
		return JSON.parse(data ?? "{}") as SessionData;
	}
	throw new Error("session ID not found");
}
