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
exports.ValidationController = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const ackUtils_1 = require("../utils/ackUtils");
const schemaValidations_1 = require("../validations/L0-validations/schemaValidations");
const L1_validations_1 = require("../validations/L1-validations");
const validateContext_1 = require("../utils/data-utils/validateContext");
const headerUtils_1 = require("../utils/headerUtils");
const ondc_crypto_sdk_nodejs_1 = require("ondc-crypto-sdk-nodejs");
class ValidationController {
    constructor() {
        this.validateSignature = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const header = JSON.stringify(req.headers);
                const body = JSON.stringify(req.body);
                const valid = yield (0, ondc_crypto_sdk_nodejs_1.isHeaderValid)({
                    header: header,
                    body: body,
                    publicKey: yield (0, headerUtils_1.getPublicKeys)(header, body),
                });
                if (!valid) {
                    res
                        .status(200)
                        .send((0, ackUtils_1.setAckResponse)(false, "Invalid Signature", "10001"));
                    return;
                }
                next();
            }
            catch (error) {
                res.status(200).send((0, ackUtils_1.setAckResponse)(false, "Invalid Signature", "10001"));
                return;
            }
        });
        // Middleware: Validate request body
        this.validateRequestBody = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (!body || !body.context || !body.context.action) {
                logger_1.default.error("Invalid request body", body);
                res.status(200).send(ackUtils_1.setBadRequestNack);
                return;
            }
            next();
        });
    }
    // Middleware: L0 validations
    validateL0(req, res, next) {
        const { action } = req.params;
        const body = req.body;
        const l0Result = (0, schemaValidations_1.performL0Validations)(body, action);
        if (!l0Result.valid) {
            res.status(200).send((0, ackUtils_1.setAckResponse)(false, l0Result.errors, "400"));
            return;
        }
        next();
    }
    // Middleware: L1 validations
    validateL1(req, res, next) {
        var _a;
        const { action } = req.params;
        const body = req.body;
        const l1Result = (0, L1_validations_1.performL1Validations)(action, body);
        if (!l1Result.valid) {
            const { error } = l1Result;
            res
                .status(200)
                .send((0, ackUtils_1.setAckResponse)(false, error === null || error === void 0 ? void 0 : error.message, (_a = error === null || error === void 0 ? void 0 : error.code) === null || _a === void 0 ? void 0 : _a.toString()));
            return;
        }
        next();
    }
    // Middleware: Context validations
    validateContext(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { action } = req.params;
            const body = req.body;
            const contextValidations = yield (0, validateContext_1.performContextValidations)(action, body);
            if (!contextValidations.valid) {
                res
                    .status(200)
                    .send((0, ackUtils_1.setAckResponse)(false, contextValidations.error, "400"));
                return;
            }
            next();
        });
    }
}
exports.ValidationController = ValidationController;
