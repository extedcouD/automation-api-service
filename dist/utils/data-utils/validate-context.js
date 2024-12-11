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
const async_validations_1 = require("./async-validations");
const cache_utils_1 = require("./cache-utils");
function performContextValidations(context, subscriberUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionData = yield (0, cache_utils_1.loadData)(subscriberUrl);
        if (new Date(context.timestamp).getTime() <
            new Date(sessionData.context_cache.latest_timestamp).getTime()) {
            return {
                valid: false,
                error: `Invalid timestamp in context should be greater than ${sessionData.context_cache.latest_timestamp}
        	of last ${sessionData.context_cache.latest_action} action`,
            };
        }
        return (0, async_validations_1.validateAsyncContext)(context, sessionData);
    });
}
