"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSubscriberUri = computeSubscriberUri;
function computeSubscriberUri(context, action, fromMock) {
    var _a;
    if (!context.bap_uri) {
        throw new Error("BAP URI not found in context");
    }
    if (action !== "search" && !context.bpp_uri) {
        throw new Error("BPP URI not found in context");
    }
    const bapUri = context.bap_uri;
    const bppUri = (_a = context.bpp_uri) !== null && _a !== void 0 ? _a : "";
    if (fromMock) {
        return action.startsWith("on_") ? bapUri : bppUri;
    }
    return action.startsWith("on_") ? bppUri : bapUri;
}
