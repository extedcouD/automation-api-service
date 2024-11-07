import { ackPayload } from "../models/interface";
import { vLookUp } from "vlookup-ondc";
import logger from "./logger";
import { createAuthorizationHeader } from "ondc-crypto-sdk-nodejs";
import { ONDCSubscriber } from "../models/interface";

const createAuthHeader = async (payload: ackPayload) => {
  try {
    const header = await createAuthorizationHeader({
      body: JSON.stringify(payload),
      privateKey: process.env.PRIVATE_KEY || "",
      subscriberId: process.env.SUBSCRIBER_ID || "", // Subscriber ID that you get after registering to ONDC Network
      subscriberUniqueKeyId: process.env.UKID || "", // Unique Key Id or uKid that you get after registering to ONDC Network
    });

    return header;
  } catch (error) {
    logger.error("Error while creating Authorization Header", error);
    throw new Error("Error while creating Authorization Header");
  }
};

const fetchSubscriberDetails = (header: string) => {
  const regex = /keyId="([^"]+)"/;
  const keyId = regex.exec(header);

  // Return null if no keyId are found or keyId[1] is not present
  if (!keyId || !keyId[1]) return null;

  // Split the matched keyId value by '|' and destructure the parts if they exist
  const [subscriberId, ukId] = keyId[1].split("|");

  // Ensure both subscriberID and ukId are present
  return subscriberId && ukId ? { subscriberId, ukId } : null;
};

const getPublicKeys = async (header: string, payload: ackPayload) => {
  const { subscriberId, ukId } = fetchSubscriberDetails(header) || {};

  vLookUp({
    senderSubscriberId: process.env.SUBSCRIBER_ID || "", //subscriber_id of sender
    privateKey: process.env.SIGN_PRIVATE_KEY || "", //private key of sender in base64 encoding
    //search parameters of the NP whose details need to be fetched from registry
    domain: payload.context?.domain,
    subscriberId: subscriberId || "",
    country: payload.context?.country,
    type: "sellerApp", //buyerApp, sellerApp, gateway
    city: "std:080",
    env: "preprod", //staging,preprod,prod
  })
    .then((res) => {
      if (typeof res === "string") {
        const parsedResponse: ONDCSubscriber[] = JSON.parse(res);
        return parsedResponse[0]["signing_public_key"];
      }

      return res[0]["signing_public_key"];
    })
    .catch((err) => {
      logger.error("Error while fetching public keys!");
      throw new Error("Error while fetching public keys");
    });

  return "";
};

export { getPublicKeys };
