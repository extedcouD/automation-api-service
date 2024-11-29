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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveContextData = saveContextData;
exports.loadData = loadData;
const ondc_automation_cache_lib_1 = require("ondc-automation-cache-lib");
function saveContextData(context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (context.action === "search") {
            const action = context.action;
            const timestamp = context.timestamp;
            const saveData = {
                latestTimestamp: timestamp,
                latestAction: action,
                bap_id: context.bap_id,
                bap_uri: context.bap_uri,
                message_ids: [context.message_id],
            };
            yield ondc_automation_cache_lib_1.RedisService.setKey(context.transaction_id, JSON.stringify(saveData));
        }
        else {
            const data = yield loadData(context.transaction_id);
            data.latestAction = context.action;
            data.latestTimestamp = context.timestamp;
            data.message_ids.push(context.message_id);
            yield ondc_automation_cache_lib_1.RedisService.setKey(context.transaction_id, JSON.stringify(data));
        }
    });
}
function loadData(transactionId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ondc_automation_cache_lib_1.RedisService.keyExists(transactionId)) {
            const data = yield ondc_automation_cache_lib_1.RedisService.getKey(transactionId);
            return JSON.parse(data !== null && data !== void 0 ? data : "{}");
        }
        throw new Error("Transaction ID not found");
    });
}
