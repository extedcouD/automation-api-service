import { ONDCSubscriber } from "../models/interface";
import { vLookUp } from "vlookup-ondc";
import logger from "./logger";
import { createAuthorizationHeader } from "ondc-crypto-sdk-nodejs";

const createAuthHeader = async (payload: any) => {
	try {
		const header = await createAuthorizationHeader({
			body: JSON.stringify(payload),
			privateKey: process.env.SIGN_PRIVATE_KEY || "",
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

const getPublicKeys = async (header: string, payload: any) => {
	try {
		// Fetching subscriber details and ensuring they exist
		const { subscriberId, ukId } = fetchSubscriberDetails(header) || {};

		if (
			!subscriberId ||
			!payload?.context?.domain ||
			!payload?.context?.location?.country?.code
		) {
			logger.error(
				"Missing required parameters: subscriberId, domain or country"
			);
			throw new Error(
				"Missing required parameters: subscriberId, domain or country"
			);
		}

		// Destructuring environment variables with fallbacks
		const {
			SUBSCRIBER_ID = "",
			SIGN_PRIVATE_KEY = "",
			ONDC_ENV = "",
		} = process.env;

		if (!SUBSCRIBER_ID || !SIGN_PRIVATE_KEY) {
			logger.error(
				"Missing environment variables: SUBSCRIBER_ID or SIGN_PRIVATE_KEY"
			);
			throw new Error(
				"Missing environment variables: SUBSCRIBER_ID or SIGN_PRIVATE_KEY"
			);
		}

		// Making the vLookUp request and handling the response
		const res = await vLookUp({
			senderSubscriberId: SUBSCRIBER_ID, // subscriber_id of sender
			privateKey: SIGN_PRIVATE_KEY, // private key of sender in base64 encoding
			domain: payload.context?.domain,
			subscriberId: subscriberId, // fetched subscriberId
			country: payload.context?.location?.country?.code,
			type: "sellerApp", // type (buyerApp, sellerApp, gateway)
			city: payload.context?.location?.city?.code, // example city code
			env: ONDC_ENV, // environment (staging, preprod, prod)
		});

		// Parsing response and returning the signing public key
		if (typeof res === "string") {
			const parsedResponse: ONDCSubscriber[] = JSON.parse(res);
			return parsedResponse[0]?.signing_public_key || "";
		}

		return res[0]?.signing_public_key || "";
	} catch (error) {
		// Detailed error logging for easier debugging
		logger.error("Error while fetching public keys:", error);
		throw new Error("Error while fetching public keys");
	}
};

export { getPublicKeys, createAuthHeader };
