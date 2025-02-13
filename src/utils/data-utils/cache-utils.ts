import { RedisService } from "ondc-automation-cache-lib";
import { BecknContext } from "../../models/beckn-types";
import { SessionData } from "../../types/session-types";
import logger from "../logger";

export async function saveContextData(
	context: BecknContext,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	if (sessionData === undefined) {
		logger.info("Session data not found for subscriber URL: " + subscriberUrl);
		return;
	}
	if (!sessionData.current_flow_id) {
		logger.error("Current flow id not found in session data");
		return;
	}
	sessionData.context_cache[sessionData.current_flow_id].latest_action =
		context.action;
	sessionData.context_cache[sessionData.current_flow_id].latest_timestamp =
		context.timestamp;
	sessionData.context_cache[sessionData.current_flow_id].message_ids.push(
		context.message_id
	);
	logger.info("Saving context data to cache latest action", context.action);
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function savePayloadData(
	context: BecknContext,
	response: any,
	requestID: string,
	subscriberUrl: string
) {
	const sessionData = await loadData(subscriberUrl);
	if (sessionData === undefined) {
		logger.info("Session data not found for subscriber URL: " + subscriberUrl);
		return;
	}
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
		payload_id: requestID,
		response: response,
	});

	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function loadData(subscriberUrl: string) {
	if (await RedisService.keyExists(subscriberUrl)) {
		logger.info("Loading data from cache " + subscriberUrl);
		const data = await RedisService.getKey(subscriberUrl);
		return JSON.parse(data ?? "{}") as SessionData;
	}
	return undefined;
}
