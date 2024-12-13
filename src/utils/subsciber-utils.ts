import {BecknContext} from "../models/beckn-types";
import logger from "./logger";

export function computeSubscriberUri(
    context: BecknContext,
    action: string,
    fromMock: boolean
) {
    console.log("computing subscriber uri", context, action, fromMock);
    if (!context.bap_uri) {
        throw new Error("BAP URI not found in context");
    }
    if (action !== "search" && !context.bpp_uri) {
        console.log(action, context);
        throw new Error("BPP URI not found in context");
    }

    const bapUri = context.bap_uri;
    const bppUri = context.bpp_uri ?? "";

    let retValue = "";

    if (fromMock) {
        retValue = action.startsWith("on_") ? bapUri : bppUri;
    } else {
        retValue = action.startsWith("on_") ? bppUri : bapUri;
    }
    logger.info(`Computed subscriber URI: ${retValue}`);
    return retValue;
}
