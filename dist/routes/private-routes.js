"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const communication_controller_1 = require("../controllers/communication-controller");
const data_controller_1 = require("../controllers/data-controller");
const validation_controller_1 = require("../controllers/validation-controller");
const logger_1 = __importDefault(require("../utils/logger"));
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
const commController = new communication_controller_1.CommunicationController();
const dbController = new data_controller_1.DataController();
const validationController = new validation_controller_1.ValidationController();
router.post("/:action", validationController.validateRequestBodyMock, validationController.validateSessionFromMock, (req, res, next) => {
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
                dbController.savePayloadInCache(req, body, true);
                // Log the response being sent
                logger_1.default.info("Sending response to: " + JSON.stringify(body));
            }
            return originalSend.call(this, body); // Call the original send method
        };
    }
    next(); // Proceed to the next middleware
}, validationController.validateL0, validationController.validateContextFromMock, dbController.saveContextInCacheMock, commController.handleRequestFromMockServer);
exports.default = router;
