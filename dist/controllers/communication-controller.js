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
exports.CommunicationController = void 0;
const ackUtils_1 = require("../utils/ackUtils");
const logger_1 = __importDefault(require("../utils/logger"));
const forwarding_service_1 = require("../services/forwarding-service");
const subsciber_utils_1 = require("../utils/subsciber-utils");
class CommunicationController {
    constructor() {
        this.forwardToMockServer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const context = req.body.context;
            const action = req.params.action;
            const subscriberUrl = (0, subsciber_utils_1.computeSubscriberUri)(context, action, false);
            try {
                yield new forwarding_service_1.CommunicationService().forwardApiToMock(req.body, req.params.action);
                res.status(200).send((0, ackUtils_1.setAckResponse)(true));
            }
            catch (error) {
                logger_1.default.error("Error in forwarding request to mock server", error);
                res.status(200).send(ackUtils_1.setIneternalServerNack);
            }
        });
        this.handleRequestFromMockServer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const context = req.body.context;
                const bpp_uri = context.bpp_uri;
                if (bpp_uri) {
                    const response = yield this.communicationService.forwardApiToNp(req.body, req.params.action);
                    res
                        .status(response.status)
                        .send(response.data);
                    return;
                }
                const response = yield this.communicationService.forwardApiToGateway(req.body);
                res.status(response.status).send(response.data);
            }
            catch (error) {
                res.status(200).send(ackUtils_1.setIneternalServerNack);
                logger_1.default.error("Error in handling request from mock server", error);
            }
        });
        this.communicationService = new forwarding_service_1.CommunicationService();
    }
}
exports.CommunicationController = CommunicationController;
