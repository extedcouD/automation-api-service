"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAxiosErrorMessage = getAxiosErrorMessage;
const logger_1 = __importDefault(require("./logger"));
function getAxiosErrorMessage(error) {
    var _a;
    logger_1.default.debug(JSON.stringify(error, null, 2));
    if (error.response) {
        // Server responded with a status code outside the 2xx range
        return (((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message) ||
            error.response.statusText ||
            "Unknown error from server");
    }
    else if (error.request) {
        // No response was received
        return "No response received from server";
    }
    else {
        // Error occurred while setting up the request
        return error.message || "An unknown error occurred";
    }
}
