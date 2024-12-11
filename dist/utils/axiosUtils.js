"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAxiosErrorMessage = getAxiosErrorMessage;
function getAxiosErrorMessage(error) {
    var _a;
    if (error.response) {
        // Server responded with a status code outside the 2xx range
        return ((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message) || error.response.statusText || 'Unknown error from server';
    }
    else if (error.request) {
        // No response was received
        return 'No response received from server';
    }
    else {
        // Error occurred while setting up the request
        return error.message || 'An unknown error occurred';
    }
}
