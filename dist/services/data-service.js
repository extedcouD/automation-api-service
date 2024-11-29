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
exports.DataService = void 0;
class DataService {
    constructor() {
        this.saveRequestToDB = (context, payload, dbUrl) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const save_data = {
                messageId: context.message_id,
                transactionalId: context.transaction_id,
                action: context.action.toUpperCase(),
                payload: payload,
                bppId: (_a = context.bpp_id) !== null && _a !== void 0 ? _a : null,
                bapId: context.bap_id,
                createdAt: null,
                updatedAt: null,
                type: "REQUEST",
                httpStatus: null,
            };
            const url = `${dbUrl}/payload`;
            console.log("Saving data to DB", url, save_data);
            // const res = await axios.post(url, save_data, {
            // 	headers: {
            // 		"Content-Type": "application/json",
            // 	},
            // });
            // logger.info("Data saved to DB", res.data);
        });
    }
}
exports.DataService = DataService;
