import { BecknContext } from "../../models/beckn-types";
import { validateAsyncContext } from "./async-validations";
import { loadData } from "./cache-utils";
import logger from "../logger";

export async function performContextValidations(
	context: BecknContext,
	subscriberUrl: string
): Promise<{
	valid: boolean;
	error?: string;
}> {
	const sessionData = await loadData(subscriberUrl);
	const current_flow_id = sessionData.current_flow_id;
	if (!current_flow_id) {
		return {
			valid: false,
			error: "Current flow id not found in session data",
		};
	}
	const cacheData = sessionData.context_cache[current_flow_id];
	if (sessionData.difficulty_cache.timeValidations) {
		if (
			new Date(context.timestamp).getTime() <
			new Date(cacheData.latest_timestamp).getTime()
		) {
			return {
				valid: false,
				error: `Invalid timestamp in context should be greater than ${sessionData.context_cache.latest_timestamp}
                of last ${sessionData.context_cache.latest_action} action`,
			};
		}
	} else {
		logger.info("Time validations are disabled");
	}

	return validateAsyncContext(context, sessionData);
}

export function isValidJSON(input: string): boolean {
	try {
		JSON.parse(input);
		return true; // Input is valid JSON
	} catch (error) {
		return false; // Input is not valid JSON
	}
}
