import {BecknContext} from "../models/beckn-types";

export function computeSubsciberUri(
    context: BecknContext,
    action: string,
    fromMock: boolean
) {
    const bapUri = context.bap_uri;
    const bppUri = context.bpp_uri ?? "";

    if (fromMock) {
        return action.startsWith("on_") ? bapUri : bppUri;
    }
    return action.startsWith("on_") ? bppUri : bapUri;
}
