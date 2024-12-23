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
exports.saveContextData = saveContextData;
exports.savePayloadData = savePayloadData;
exports.loadData = loadData;
const ondc_automation_cache_lib_1 = require("ondc-automation-cache-lib");
const logger_1 = __importDefault(require("../logger"));
function saveContextData(context, subscriberUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionData = yield loadData(subscriberUrl);
        sessionData.context_cache.latest_action = context.action;
        sessionData.context_cache.latest_timestamp = context.timestamp;
        sessionData.context_cache.message_ids.push(context.message_id);
        logger_1.default.info("Saving context data to cache latest action", context.action);
        yield ondc_automation_cache_lib_1.RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
    });
}
function savePayloadData(context, response, subscriberUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionData = yield loadData(subscriberUrl);
        if (!sessionData.current_flow_id) {
            logger_1.default.error("Current flow id not found in session data");
            return;
        }
        if (!Array.isArray(sessionData.session_payloads[sessionData.current_flow_id])) {
            sessionData.session_payloads[sessionData.current_flow_id] = [];
        }
        if (!sessionData.session_payloads[sessionData.current_flow_id]) {
            sessionData.session_payloads[sessionData.current_flow_id] = [];
        }
        sessionData.session_payloads[sessionData.current_flow_id].push({
            request: context,
            response: response,
        });
        yield ondc_automation_cache_lib_1.RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
    });
}
function loadData(subscriberUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ondc_automation_cache_lib_1.RedisService.keyExists(subscriberUrl)) {
            logger_1.default.info("Loading data from cache " + subscriberUrl);
            const data = yield ondc_automation_cache_lib_1.RedisService.getKey(subscriberUrl);
            return JSON.parse(data !== null && data !== void 0 ? data : "{}");
        }
        throw new Error("session ID not found " + subscriberUrl);
    });
}
