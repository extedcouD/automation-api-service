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
exports.DataService = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../utils/logger"));
const ondc_automation_cache_lib_1 = require("ondc-automation-cache-lib");
const cache_utils_1 = require("../utils/data-utils/cache-utils");
const axiosUtils_1 = require("../utils/axiosUtils");
class DataService {
    constructor() {
        this.saveSessionToDB = (subscriberUri, payload, response, code) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const dbUrl = process.env.DATA_BASE_URL;
                const sessionData = yield (0, cache_utils_1.loadData)(subscriberUri);
                const checkSessionUrl = `${dbUrl}/api/sessions/check/${sessionData.active_session_id}`;
                const postUrl = `${dbUrl}/api/sessions`;
                const exists = yield axios_1.default.get(checkSessionUrl);
                if (!exists.data) {
                    logger_1.default.info("Session does not exist in DB, creating new session");
                    yield axios_1.default.post(postUrl, {
                        "sessionId": sessionData.active_session_id,
                        "npType": sessionData.type,
                        "npId": sessionData.context_cache.subscriber_id,
                        "domain": sessionData.domain,
                        "version": sessionData.version,
                        "sessionType": "AUTOMATION",
                        "sessionActive": true
                    });
                }
                const responseBody = {
                    "messageId": payload.context.message_id,
                    "transactionId": payload.context.transaction_id,
                    "action": payload.context.action,
                    "bppId": (_a = payload.context.bpp_id) !== null && _a !== void 0 ? _a : "",
                    "bapId": payload.context.bap_id,
                    "jsonObject": response,
                    "type": "RESPONSE",
                    "httpStatus": code,
                    "flowId": sessionData.current_flow_id,
                    "sessionDetails": {
                        "sessionId": sessionData.active_session_id
                    }
                };
                const requestBody = {
                    "messageId": payload.context.message_id,
                    "transactionId": payload.context.transaction_id,
                    "action": payload.context.action,
                    "bppId": (_b = payload.context.bpp_id) !== null && _b !== void 0 ? _b : "",
                    "bapId": payload.context.bap_id,
                    "jsonObject": payload,
                    "type": "REQUEST",
                    "httpStatus": code,
                    "flowId": sessionData.current_flow_id,
                    "sessionDetails": {
                        "sessionId": sessionData.active_session_id
                    }
                };
                yield axios_1.default.post(postUrl, responseBody);
                yield axios_1.default.post(postUrl, requestBody);
            }
            catch (error) {
                console.log(JSON.stringify(error));
                logger_1.default.error("Error in saving data to DB ", (0, axiosUtils_1.getAxiosErrorMessage)(error));
            }
        });
        this.checkSessionExistence = (subscriberUri) => __awaiter(this, void 0, void 0, function* () {
            return yield ondc_automation_cache_lib_1.RedisService.keyExists(subscriberUri);
        });
    }
}
exports.DataService = DataService;
