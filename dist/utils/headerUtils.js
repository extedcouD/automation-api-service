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
exports.createAuthHeader = void 0;
exports.getPublicKeys = getPublicKeys;
const logger_1 = __importDefault(require("./logger"));
const ondc_crypto_sdk_nodejs_1 = require("ondc-crypto-sdk-nodejs");
const axios_1 = __importDefault(require("axios"));
const registryGatewayConfig_1 = require("../config/registryGatewayConfig");
const createAuthHeader = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = yield (0, ondc_crypto_sdk_nodejs_1.createAuthorizationHeader)({
            body: JSON.stringify(payload),
            privateKey: process.env.SIGN_PRIVATE_KEY || "",
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
    const keyId = extractSignatureKeyId(header);
    if (keyId.length === 0) {
        logger_1.default.error("Key ID not found in header");
        return null;
    }
    // Split the matched keyId value by '|' and destructure the parts if they exist
    const [subscriberId, ukId, _] = keyId[0].split("|");
    // Ensure both subscriberID and ukId are present
    return subscriberId && ukId ? { subscriberId, ukId } : null;
};
function extractSignatureKeyId(input) {
    // Updated regex to handle keyId values properly
    const keyIdRegex = /keyId=\\"([^\\"]+)\\"/g;
    const matches = [];
    let match;
    while ((match = keyIdRegex.exec(input)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}
function getPublicKeys(header, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { subscriberId, ukId } = fetchSubscriberDetails(header) || {};
            if (!subscriberId || !ukId) {
                throw new Error("Subscriber ID or UKID not found");
            }
            const response = yield performLookup(subscriberId, ukId);
            return response.signing_public_key;
        }
        catch (error) {
            logger_1.default.error("Error while getting public keys");
            throw new Error("Error while getting public keys");
        }
    });
}
function performLookup(subId, ukId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${registryGatewayConfig_1.config.registry.STAGING}lookup`;
        const data = {
            subscriber_id: subId,
            ukId: ukId,
        };
        try {
            const response = yield axios_1.default.post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data[0];
        }
        catch (error) {
            logger_1.default.error("Error while performing lookup", error);
            throw new Error("Error while performing lookup");
        }
    });
}
