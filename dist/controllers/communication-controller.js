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
class CommunicationController {
    constructor() {
        this.forwardToMockServer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield new forwarding_service_1.CommunicationService().forwardApiToMock(req.body, req.params.action);
                res.status(200).send((0, ackUtils_1.setAckResponse)(true));
            }
            catch (error) {
                res.status(200).send(ackUtils_1.setIneternalServerNack);
                logger_1.default.error("Error in forwarding request to mock server", error);
            }
        });
        this.communicationServce = new forwarding_service_1.CommunicationService();
    }
    forwardToNpServer(req, res) {
        try {
            this.communicationServce.forwardApiToNp(req.body, req.params.action);
            res.status(200).send((0, ackUtils_1.setAckResponse)(true));
        }
        catch (error) {
            res.status(200).send(ackUtils_1.setIneternalServerNack);
            logger_1.default.error("Error in forwarding request to NP server", error);
        }
    }
}
exports.CommunicationController = CommunicationController;
