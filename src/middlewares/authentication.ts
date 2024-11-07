import { isHeaderValid } from "ondc-crypto-sdk-nodejs";
import { getPublicKeys } from "../utils/headerUtils";
import { setAckResponse } from "../utils/ackUtils";
import { ackPayload } from "../models/interface";

const headerVerification = async (header: string, payload: ackPayload) => {
  try {
    const publicKey = await getPublicKeys(header, payload);
    const isValid = await isHeaderValid({
      header: header, // The Authorisation header sent by other network participants
      body: JSON.stringify(payload),
      publicKey: publicKey,
    });

    if (isValid) {
      return setAckResponse(payload?.context, true);
    } else {
      return setAckResponse(payload?.context, false, {
        code: "30016",
        message: "Invalid Signature",
      });
    }
  } catch (error) {
    return setAckResponse(payload?.context, false, {
      code: "30016",
      message: "Invalid Signature",
    });
  }
};

export default headerVerification;
