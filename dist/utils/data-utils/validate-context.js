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
exports.performContextValidations = performContextValidations;
exports.isValidJSON = isValidJSON;
const async_validations_1 = require("./async-validations");
const cache_utils_1 = require("./cache-utils");
const logger_1 = __importDefault(require("../logger"));
function performContextValidations(context, subscriberUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionData = yield (0, cache_utils_1.loadData)(subscriberUrl);
        if (sessionData.difficulty_cache.timeValidations) {
            if (new Date(context.timestamp).getTime() <
                new Date(sessionData.context_cache.latest_timestamp).getTime()) {
                return {
                    valid: false,
                    error: `Invalid timestamp in context should be greater than ${sessionData.context_cache.latest_timestamp}
                of last ${sessionData.context_cache.latest_action} action`,
                };
            }
        }
        else {
            logger_1.default.info("Time validations are disabled");
        }
        return (0, async_validations_1.validateAsyncContext)(context, sessionData);
    });
}
function isValidJSON(input) {
    try {
        JSON.parse(input);
        return true; // Input is valid JSON
    }
    catch (error) {
        return false; // Input is not valid JSON
    }
}
