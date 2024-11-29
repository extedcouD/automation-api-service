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
exports.performContextValidations = performContextValidations;
const ondc_automation_cache_lib_1 = require("ondc-automation-cache-lib");
const cache_utils_1 = require("./cache-utils");
function performContextValidations(action, body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (action === "search") {
            return {
                valid: true,
            };
        }
        console.log(yield ondc_automation_cache_lib_1.RedisService.keyExists(body.context.transaction_id));
        if (!(yield ondc_automation_cache_lib_1.RedisService.keyExists(body.context.transaction_id))) {
            return {
                valid: false,
                error: "Transaction ID not found",
            };
        }
        const data = yield (0, cache_utils_1.loadData)(body.context.transaction_id);
        console.log(data);
        if (action.startsWith("on_")) {
            if ("on_" + data.latestAction != action) {
                return {
                    valid: false,
                    error: "received action is not the expected action",
                };
            }
        }
        if (data.bap_id !== body.context.bap_id) {
            return {
                valid: false,
                error: "bap_id does not match",
            };
        }
        if (data.bap_uri !== body.context.bap_uri) {
            return {
                valid: false,
                error: "bap_uri does not match",
            };
        }
        if (data.message_ids.includes(body.context.message_id)) {
            return {
                valid: false,
                error: "message_id is not unique",
            };
        }
        if (data.latestTimestamp > body.context.timestamp) {
            return {
                valid: false,
                error: "Timestamp is not the latest",
            };
        }
        return {
            valid: true,
        };
    });
}
