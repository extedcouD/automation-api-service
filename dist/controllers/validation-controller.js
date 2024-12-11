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
const validate_context_1 = require("../utils/data-utils/validate-context");
const headerUtils_1 = require("../utils/headerUtils");
const ondc_crypto_sdk_nodejs_1 = require("ondc-crypto-sdk-nodejs");
const data_service_1 = require("../services/data-service");
const subsciber_utils_1 = require("../utils/subsciber-utils");
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
        this.validateRequestBodyNp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (!body || !body.context || !body.context.action) {
                logger_1.default.error("Invalid request body", body);
                res.status(200).send(ackUtils_1.setBadRequestNack);
                return;
            }
            try {
                (0, subsciber_utils_1.computeSubscriberUri)(body.context, body.context.action, false);
            }
            catch (_a) {
                logger_1.default.error("Ambiguous subscriber URL", body);
                res.status(200).send(ackUtils_1.setBadRequestNack);
                return;
            }
            next();
        });
        this.validateRequestBodyMock = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (!body || !body.context || !body.context.action) {
                logger_1.default.error("Invalid request body", body);
                res.status(200).send(ackUtils_1.setBadRequestNack);
                return;
            }
            try {
                (0, subsciber_utils_1.computeSubscriberUri)(body.context, body.context.action, false);
            }
            catch (_a) {
                logger_1.default.error("Ambiguous subscriber URL", body);
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
        logger_1.default.info("L0 validations passed");
        next();
    }
    // Middleware: L1 validations
    validateL1(req, res, next) {
        const { action } = req.params;
        const body = req.body;
        const l1Result = (0, L1_validations_1.performL1Validations)(action, body);
        if (!l1Result[0].valid) {
            const error = l1Result[0].description;
            const code = l1Result[0].errorCode;
            res
                .status(200)
                .send((0, ackUtils_1.setAckResponse)(false, error, code.toString()));
            return;
        }
        logger_1.default.info("L1 validations passed");
        next();
    }
    // Middleware: Context validations
    validateContextFromNp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { action } = req.params;
            const body = req.body;
            const subscriberUrl = (0, subsciber_utils_1.computeSubscriberUri)(body.context, action, false);
            const contextValidations = yield (0, validate_context_1.performContextValidations)(body.context, subscriberUrl);
            if (!contextValidations.valid) {
                res
                    .status(200)
                    .send((0, ackUtils_1.setAckResponse)(false, contextValidations.error, "400"));
                return;
            }
            logger_1.default.info("Context validations passed");
            next();
        });
    }
    validateContextFromMock(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const subscriberUrl = (_a = req.query.subscriberUrl) !== null && _a !== void 0 ? _a : (0, subsciber_utils_1.computeSubscriberUri)(req.body.context, req.params.action, true);
            const context = req.body.context;
            const contextValidations = yield (0, validate_context_1.performContextValidations)(context, subscriberUrl);
            if (!contextValidations.valid) {
                res
                    .status(200)
                    .send((0, ackUtils_1.setAckResponse)(false, contextValidations.error, "400"));
                return;
            }
            next();
        });
    }
    validateSessionFromNp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { action } = req.params;
            const body = req.body;
            const context = body.context;
            const validSession = yield new data_service_1.DataService().checkSessionExistence((0, subsciber_utils_1.computeSubscriberUri)(context, action, false));
            if (!validSession) {
                res.status(200).send((0, ackUtils_1.setAckResponse)(false, "Invalid Session", "90001"));
                return;
            }
            next();
        });
    }
    validateSessionFromMock(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const subscriberUrl = (_a = req.query.subscriberUrl) !== null && _a !== void 0 ? _a : (0, subsciber_utils_1.computeSubscriberUri)(req.body.context, req.params.action, true);
            const validSession = yield new data_service_1.DataService().checkSessionExistence(subscriberUrl);
            if (!validSession) {
                res.status(200).send((0, ackUtils_1.setAckResponse)(false, "Invalid Session", "90001"));
                return;
            }
            next();
        });
    }
}
exports.ValidationController = ValidationController;
