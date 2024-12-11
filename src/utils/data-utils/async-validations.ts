import {
    apiProperties,
    supportedActions,
} from "../../config/supported-actions";
import {BecknContext} from "../../models/beckn-types";
import {SessionData} from "../../types/session-types";
import logger from "../logger";

export function validateAsyncContext(
    subject: BecknContext,
    sessionData: SessionData
) {
    const currentFlow = sessionData.current_flow_id;
    let flowPayloads: {
        request: BecknContext;
        response: any;
    }[] = sessionData.session_payloads[currentFlow];
    if (!Array.isArray(flowPayloads)) {
        logger.error("Invalid flow payloads please correct the session data!!");
        flowPayloads = [];
    }

    const sortedContexts = flowPayloads
        .map((payload) => payload.request)
        .sort(
            (a, b) =>
                new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        )
        .reverse();

    const subjectAction = subject.action;
    const predecesorName = getAsyncPredecesor(subjectAction);
    logger.debug(`Validating ${subjectAction} with predecesor ${predecesorName}`);
    if (predecesorName) {
        logger.debug(JSON.stringify((sortedContexts)));
        const predecesor = sortedContexts.find(
            (context) => context.action === predecesorName
        );
        if (!predecesor) {
            return {
                valid: false,
                error: `${predecesorName} for ${subjectAction} not found in the flow history`,
            };
        }
        if (predecesor.message_id != subject.message_id) {
            return {
                valid: false,
                error: `message_id mismatch between ${predecesorName} and ${subjectAction}
                expteced ${predecesor.message_id} but found ${subject.message_id}
                `,
            };
        }
        const filteredContexts = sortedContexts
            .filter((c) => JSON.stringify(c) !== JSON.stringify(predecesor))
            .map((c) => c.message_id);
        if (filteredContexts.includes(subject.message_id)) {
            return {
                valid: false,
                error: `Duplicate message_id found in the flow history`,
            };
        }
    } else {
        const supporteActions = getSupporedActions(
            sessionData.context_cache.latest_action
        );
        if (!supporteActions.includes(subjectAction)) {
            return {
                valid: false,
                error: `${subjectAction} not supported after ${sessionData.context_cache.latest_action}`,
            };
        }
    }
    return validateTrasactionId(
        subjectAction,
        subject.transaction_id,
        sortedContexts
    );
}

function validateTrasactionId(
    action: string,
    transId: string,
    sortedContexts: BecknContext[]
) {
    const transactionPartners = getTrasactionPartners(action);
    const transactionContexts = findFirstMatches(
        sortedContexts,
        transactionPartners
    );
    for (const context of transactionContexts) {
        if (context.transaction_id !== transId) {
            return {
                valid: false,
                error: `Transaction id mismatch between ${action} and ${context.action}`,
            };
        }
    }
    return {
        valid: true,
    };
}

function getAsyncPredecesor(action: string) {
    if (action in apiProperties) {
        return apiProperties[action as keyof typeof apiProperties].async_predecessor;
    }
    return null;
}

function getSupporedActions(action: string) {
    if (action === "") {
        action = "null";
    }
    if (action in supportedActions) {
        return supportedActions[action as keyof typeof supportedActions];
    }
    return [] as string[];
}

function getTrasactionPartners(action: string) {
    if (action in apiProperties) {
        return apiProperties[action as keyof typeof apiProperties]
            .transaction_partner;
    }
    return [] as string[];
}

function findFirstMatches(
    array: BecknContext[],
    actions: string[]
): BecknContext[] {
    const result: BecknContext[] = [];
    const foundActions = new Set<string>();
    for (const item of array) {
        if (actions.includes(item.action) && !foundActions.has(item.action)) {
            result.push(item);
            foundActions.add(item.action);
        }
        // Stop early if all actions are found
        if (foundActions.size === actions.length) {
            break;
        }
    }

    return result;
}
