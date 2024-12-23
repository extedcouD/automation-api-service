"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSubscriberUri = computeSubscriberUri;
const logger_1 = __importDefault(require("./logger"));
function computeSubscriberUri(context, action, fromMock) {
    var _a;
    console.log("computing subscriber uri", action, fromMock);
    if (!context.bap_uri) {
        throw new Error("BAP URI not found in context");
    }
    if (action !== "search" && !context.bpp_uri) {
        console.log(action, context);
        throw new Error("BPP URI not found in context");
    }
    const bapUri = context.bap_uri;
    const bppUri = (_a = context.bpp_uri) !== null && _a !== void 0 ? _a : "";
    let retValue = "";
    if (fromMock) {
        retValue = action.startsWith("on_") ? bapUri : bppUri;
    }
    else {
        retValue = action.startsWith("on_") ? bppUri : bapUri;
    }
    logger_1.default.info(`Computed subscriber URI: ${retValue}`);
    return retValue;
}
