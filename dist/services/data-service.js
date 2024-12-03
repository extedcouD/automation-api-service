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
class DataService {
    constructor() {
        this.saveRequestToDB = (context, payload, dbUrl) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log(typeof payload);
            const save_data = {
                messageId: context.message_id,
                transactionId: context.transaction_id,
                action: context.action.toUpperCase(),
                jsonObject: payload,
                bppId: (_a = context.bpp_id) !== null && _a !== void 0 ? _a : null,
                bapId: context.bap_id,
                type: "REQUEST",
                httpStatus: 200,
            };
            const url = `${dbUrl}/payload`;
            console.log("Saving data to DB", url, JSON.stringify(payload));
            const res = yield axios_1.default.post(url, save_data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            logger_1.default.info("Data saved to DB", res.data);
        });
    }
}
exports.DataService = DataService;
