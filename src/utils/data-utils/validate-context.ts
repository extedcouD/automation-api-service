import {BecknContext} from "../../models/beckn-types";
import {validateAsyncContext} from "./async-validations";
import {loadData} from "./cache-utils";
import logger from "../logger";

export async function performContextValidations(
    context: BecknContext,
    subscriberUrl: string
): Promise<{
    valid: boolean;
    error?: string;
}> {
    const sessionData = await loadData(subscriberUrl);
    if (
        new Date(context.timestamp).getTime() <
        new Date(sessionData.context_cache.latest_timestamp).getTime()
    ) {
        return {
            valid: false,
            error: `Invalid timestamp in context should be greater than ${sessionData.context_cache.latest_timestamp}
        	of last ${sessionData.context_cache.latest_action} action`,
        };
    }
    return validateAsyncContext(context, sessionData);
}
