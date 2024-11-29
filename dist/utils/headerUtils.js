"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthHeader = exports.getPublicKeys = void 0;
const vlookup_ondc_1 = require("vlookup-ondc");
const logger_1 = __importDefault(require("./logger"));
const ondc_crypto_sdk_nodejs_1 = require("ondc-crypto-sdk-nodejs");
const createAuthHeader = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = yield (0, ondc_crypto_sdk_nodejs_1.createAuthorizationHeader)({
            body: JSON.stringify(payload),
            privateKey: process.env.PRIVATE_KEY || "",
            subscriberId: process.env.SUBSCRIBER_ID || "", // Subscriber ID that you get after registering to ONDC Network
            subscriberUniqueKeyId: process.env.UKID || "", // Unique Key Id or uKid that you get after registering to ONDC Network
        });
        return header;
    }
    catch (error) {
        logger_1.default.error("Error while creating Authorization Header", error);
        throw new Error("Error while creating Authorization Header");
    }
});
exports.createAuthHeader = createAuthHeader;
const fetchSubscriberDetails = (header) => {
    const regex = /keyId="([^"]+)"/;
    const keyId = regex.exec(header);
    // Return null if no keyId are found or keyId[1] is not present
    if (!keyId || !keyId[1])
        return null;
    // Split the matched keyId value by '|' and destructure the parts if they exist
    const [subscriberId, ukId] = keyId[1].split("|");
    // Ensure both subscriberID and ukId are present
    return subscriberId && ukId ? { subscriberId, ukId } : null;
};
const getPublicKeys = (header, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    try {
        // Fetching subscriber details and ensuring they exist
        const { subscriberId, ukId } = fetchSubscriberDetails(header) || {};
        if (!subscriberId ||
            !((_a = payload === null || payload === void 0 ? void 0 : payload.context) === null || _a === void 0 ? void 0 : _a.domain) ||
            !((_d = (_c = (_b = payload === null || payload === void 0 ? void 0 : payload.context) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.country) === null || _d === void 0 ? void 0 : _d.code)) {
            logger_1.default.error("Missing required parameters: subscriberId, domain or country");
            throw new Error("Missing required parameters: subscriberId, domain or country");
        }
        // Destructuring environment variables with fallbacks
        const { SUBSCRIBER_ID = "", SIGN_PRIVATE_KEY = "", ONDC_ENV = "", } = process.env;
        if (!SUBSCRIBER_ID || !SIGN_PRIVATE_KEY) {
            logger_1.default.error("Missing environment variables: SUBSCRIBER_ID or SIGN_PRIVATE_KEY");
            throw new Error("Missing environment variables: SUBSCRIBER_ID or SIGN_PRIVATE_KEY");
        }
        // Making the vLookUp request and handling the response
        const res = yield (0, vlookup_ondc_1.vLookUp)({
            senderSubscriberId: SUBSCRIBER_ID, // subscriber_id of sender
            privateKey: SIGN_PRIVATE_KEY, // private key of sender in base64 encoding
            domain: (_e = payload.context) === null || _e === void 0 ? void 0 : _e.domain,
            subscriberId: subscriberId, // fetched subscriberId
            country: (_h = (_g = (_f = payload.context) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.country) === null || _h === void 0 ? void 0 : _h.code,
            type: "sellerApp", // type (buyerApp, sellerApp, gateway)
            city: (_l = (_k = (_j = payload.context) === null || _j === void 0 ? void 0 : _j.location) === null || _k === void 0 ? void 0 : _k.city) === null || _l === void 0 ? void 0 : _l.code, // example city code
            env: ONDC_ENV, // environment (staging, preprod, prod)
        });
        // Parsing response and returning the signing public key
        if (typeof res === "string") {
            const parsedResponse = JSON.parse(res);
            return ((_m = parsedResponse[0]) === null || _m === void 0 ? void 0 : _m.signing_public_key) || "";
        }
        return ((_o = res[0]) === null || _o === void 0 ? void 0 : _o.signing_public_key) || "";
    }
    catch (error) {
        // Detailed error logging for easier debugging
        logger_1.default.error("Error while fetching public keys:", error);
        throw new Error("Error while fetching public keys");
    }
});
exports.getPublicKeys = getPublicKeys;
