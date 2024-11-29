"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const communication_controller_1 = require("../controllers/communication-controller");
const data_controller_1 = require("../controllers/data-controller");
const validation_controller_1 = require("../controllers/validation-controller");
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
const commController = new communication_controller_1.CommunicationController();
const dbController = new data_controller_1.DataController();
const validationController = new validation_controller_1.ValidationController();
router.post("/:action", validationController.validateRequestBody, validationController.validateL0, dbController.saveTransactionInCache, dbController.saveDataToDb, commController.forwardToNpServer);
