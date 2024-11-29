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
exports.CommunicationService = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../utils/logger"));
class CommunicationService {
    constructor() {
        this.forwardApiToMock = (body, action) => __awaiter(this, void 0, void 0, function* () {
            const url = process.env.MOCK_SERVER_URL;
            const response = yield axios_1.default.post(`${url}/${action}`, body);
            return response.data;
        });
        this.forwardApiToNp = (body, action) => __awaiter(this, void 0, void 0, function* () {
            const context = body.context;
            const mockUri = process.env.MOCK_SERVER_URL;
            const bapUri = context === null || context === void 0 ? void 0 : context.bap_uri;
            const bppUri = context === null || context === void 0 ? void 0 : context.bpp_uri;
            const finalUri = mockUri === bapUri ? bppUri : bapUri;
            const response = yield axios_1.default.post(`${finalUri}/${action}`, body);
            if (response.status !== 200) {
                logger_1.default.info("NP DID NOT RESPOND WITH 200 STATUS CODE");
            }
        });
    }
}
exports.CommunicationService = CommunicationService;
