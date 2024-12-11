"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAsyncContext = validateAsyncContext;
const supported_actions_1 = require("../../config/supported-actions");
const logger_1 = __importDefault(require("../logger"));
function validateAsyncContext(subject, sessionData) {
    console.log(JSON.stringify(sessionData, null, 2));
    const currentFlow = sessionData.current_flow_id;
    let flowPayloads = sessionData.session_payloads[currentFlow];
    if (!Array.isArray(flowPayloads)) {
        logger_1.default.error("Invalid flow payloads please correct the session data!!");
        flowPayloads = [];
    }
    const sortedContexts = flowPayloads
        .map((payload) => payload.request)
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
        .reverse();
    const subjectAction = subject.action;
    const predecesorName = getAsyncPredecesor(subjectAction);
    logger_1.default.debug(`Validating ${subjectAction} with predecesor ${predecesorName}`);
    if (predecesorName) {
        logger_1.default.debug(JSON.stringify((sortedContexts)));
        const predecesor = sortedContexts.find((context) => context.action === predecesorName);
        if (!predecesor) {
            return {
                valid: false,
                error: `${predecesorName} for ${subjectAction} not found in the flow history`,
            };
        }
        if (predecesor.message_id != subject.message_id) {
            return {
                valid: false,
                error: `message_id mismatch between ${predecesorName} and ${subjectAction}`,
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
    }
    else {
        const supporteActions = getSupporedActions(sessionData.context_cache.latest_action);
        if (!supporteActions.includes(subjectAction)) {
            return {
                valid: false,
                error: `${subjectAction} not supported after ${sessionData.context_cache.latest_action}`,
            };
        }
    }
    return validateTrasactionId(subjectAction, subject.transaction_id, sortedContexts);
}
function validateTrasactionId(action, transId, sortedContexts) {
    const transactionPartners = getTrasactionPartners(action);
    const transactionContexts = findFirstMatches(sortedContexts, transactionPartners);
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
function getAsyncPredecesor(action) {
    if (action in supported_actions_1.apiProperties) {
        return supported_actions_1.apiProperties[action].async_predecessor;
    }
    return null;
}
function getSupporedActions(action) {
    if (action in supported_actions_1.supportedActions) {
        return supported_actions_1.supportedActions[action];
    }
    return [];
}
function getTrasactionPartners(action) {
    if (action in supported_actions_1.apiProperties) {
        return supported_actions_1.apiProperties[action]
            .transaction_partner;
    }
    return [];
}
function findFirstMatches(array, actions) {
    const result = [];
    const foundActions = new Set();
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
