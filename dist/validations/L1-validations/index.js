"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performL1Validations = performL1Validations;
const search_1 = __importDefault(require("./api-tests/search"));
const select_1 = __importDefault(require("./api-tests/select"));
const init_1 = __importDefault(require("./api-tests/init"));
const confirm_1 = __importDefault(require("./api-tests/confirm"));
const status_1 = __importDefault(require("./api-tests/status"));
const cancel_1 = __importDefault(require("./api-tests/cancel"));
const on_search_1 = __importDefault(require("./api-tests/on_search"));
const on_select_1 = __importDefault(require("./api-tests/on_select"));
const on_init_1 = __importDefault(require("./api-tests/on_init"));
const on_confirm_1 = __importDefault(require("./api-tests/on_confirm"));
const on_cancel_1 = __importDefault(require("./api-tests/on_cancel"));
const on_status_1 = __importDefault(require("./api-tests/on_status"));
function performL1Validations(action, payload, allErrors = false, externalData = {}) {
    switch (action) {
        case "search":
            return (0, search_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "select":
            return (0, select_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "init":
            return (0, init_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "confirm":
            return (0, confirm_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "status":
            return (0, status_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "cancel":
            return (0, cancel_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_search":
            return (0, on_search_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_select":
            return (0, on_select_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_init":
            return (0, on_init_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_confirm":
            return (0, on_confirm_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_cancel":
            return (0, on_cancel_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_status":
            return (0, on_status_1.default)({
                payload: payload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        default:
            throw new Error("Action not found");
    }
}
