"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_controller_1 = require("../controllers/validation-controller");
const ackUtils_1 = require("../utils/ackUtils");
const router = (0, express_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
const validationController = new validation_controller_1.ValidationController();
const path_1 = __importDefault(require("path"));
router.use(express_1.default.static(path_1.default.resolve(__dirname, "../validations/L1-validations/page")));
router.post("/:action", validationController.validateRequestBodyNp, validationController.validateL0, validationController.validateSingleL1, (req, res, next) => {
    res.send((0, ackUtils_1.setAckResponse)(true));
});
router.get("/", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../validations/L1-validations/page/index.html"));
});
exports.default = router;
