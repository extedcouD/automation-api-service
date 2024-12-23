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
const headerUtils_1 = require("../utils/headerUtils");
const registryGatewayConfig_1 = require("../config/registryGatewayConfig");
const axiosUtils_1 = require("../utils/axiosUtils");
class CommunicationService {
    constructor() {
        this.forwardApiToMock = (body, action) => __awaiter(this, void 0, void 0, function* () {
            const url = process.env.MOCK_SERVER_URL;
            logger_1.default.debug("Forwarding request to mock server", url, action);
            return yield axios_1.default.post(`${url}/${action}`, body);
        });
        this.forwardApiToNp = (body, action) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const context = body.context;
            const finalUri = context.action.startsWith("on_")
                ? context.bap_uri
                : context.bpp_uri;
            const header = yield (0, headerUtils_1.createAuthHeader)(body);
            try {
                const response = yield axios_1.default.post(`${finalUri}/${action}`, body, {
                    headers: {
                        Authorization: header,
                    },
                });
                return {
                    status: response.status,
                    data: response.data,
                };
            }
            catch (error) {
                logger_1.default.error("Error in forwarding request to NP server");
                const status = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500;
                return {
                    status,
                    data: (0, axiosUtils_1.getAxiosErrorMessage)(error)
                };
            }
        });
        this.forwardApiToGateway = (body) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = registryGatewayConfig_1.config.gateway.STAGING;
            const header = yield (0, headerUtils_1.createAuthHeader)(body);
            try {
                const response = yield axios_1.default.post(`${url}search`, body, {
                    headers: {
                        Authorization: header,
                    },
                });
                return {
                    status: response.status,
                    data: response.data,
                };
            }
            catch (error) {
                logger_1.default.error("Error in forwarding request to Gateway server");
                const status = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500;
                return {
                    status,
                    data: (0, axiosUtils_1.getAxiosErrorMessage)(error)
                };
            }
        });
    }
}
exports.CommunicationService = CommunicationService;
