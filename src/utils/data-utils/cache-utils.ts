import { RedisService } from "ondc-automation-cache-lib";
import { BecknContext } from "../../models/beckn-types";
import { SessionData } from "../../types/session-types";
import logger from "../logger";

export async function saveContextData(
	context: BecknContext,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	sessionData.context_cache.latest_action = context.action;
	sessionData.context_cache.latest_timestamp = context.timestamp;
	sessionData.context_cache.message_ids.push(context.message_id);
	logger.info("Saving context data to cache latest action", context.action);
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function savePayloadData(
	context: BecknContext,
	response: any,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	if (!sessionData.current_flow_id) {
		logger.error("Current flow id not found in session data");
		return;
	}
	if (
		!Array.isArray(sessionData.session_payloads[sessionData.current_flow_id])
	) {
		sessionData.session_payloads[sessionData.current_flow_id] = [];
	}
	if (!sessionData.session_payloads[sessionData.current_flow_id]) {
		sessionData.session_payloads[sessionData.current_flow_id] = [];
	}
	sessionData.session_payloads[sessionData.current_flow_id].push({
		request: context,
		response: response,
	});

	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function loadData(subscriberUrl: string) {
	if (await RedisService.keyExists(subscriberUrl)) {
		const data = await RedisService.getKey(subscriberUrl);
		return JSON.parse(data ?? "{}") as SessionData;
	}
	throw new Error("session ID not found " + subscriberUrl);
}
