"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_controller_1 = require("../controllers/validation-controller");
const communication_controller_1 = require("../controllers/communication-controller");
const data_controller_1 = require("../controllers/data-controller");
const logger_1 = __importDefault(require("../utils/logger"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
const validationController = new validation_controller_1.ValidationController();
const commController = new communication_controller_1.CommunicationController();
const dbController = new data_controller_1.DataController();
router.post("/:action", validationController.validateRequestBodyNp, validationController.validateSessionFromNp, validationController.validateSignatureNp, (req, res, next) => {
    // Ensure `res.send` is wrapped only once
    if (!res.locals.isSendWrapped) {
        res.locals.isSendWrapped = true; // Flag to indicate the wrapping is done
        const originalSend = res.send;
        res.send = function (body) {
            // Check if the cache has already been updated
            if (!res.locals.isCacheUpdated) {
                res.locals.isCacheUpdated = true; // Flag to ensure cache update happens only once
                const statusCode = res.statusCode;
                if (statusCode !== 200) {
                    logger_1.default.info("API service response status code is not 200", statusCode);
                }
                // Save the request and response in the cache
                dbController.savePayloadInCache(req, body, false);
                dbController.savePayloadInDb(req, body, false, statusCode);
                logger_1.default.info("Sending response to: " + JSON.stringify(body));
            }
            return originalSend.call(this, body); // Call the original send method
        };
    }
    next(); // Proceed to the next middleware
}, validationController.validateL0, validationController.validateL1, validationController.validateContextFromNp, dbController.saveContextInCacheNp, commController.forwardToMockServer);
exports.default = router;
