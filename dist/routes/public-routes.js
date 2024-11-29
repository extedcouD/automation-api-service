"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_controller_1 = require("../controllers/validation-controller");
const communication_controller_1 = require("../controllers/communication-controller");
const data_controller_1 = require("../controllers/data-controller");
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
const validationController = new validation_controller_1.ValidationController();
const commController = new communication_controller_1.CommunicationController();
const dbController = new data_controller_1.DataController();
router.post("/:action", 
// validationController.validateSignature,
validationController.validateRequestBody, validationController.validateL0, validationController.validateL1, validationController.validateContext, dbController.saveTransactionInCache, dbController.saveDataToDb, commController.forwardToMockServer);
exports.default = router;
