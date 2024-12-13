import express from "express";
import {ValidationController} from "../controllers/validation-controller";
import {CommunicationController} from "../controllers/communication-controller";
import {DataController} from "../controllers/data-controller";
import logger from "../utils/logger";
import {setAckResponse} from "../utils/ackUtils";
import {readFileSync} from "fs";

const router = express();
router.use(express.json());
router.use(express.urlencoded({extended: true}));


const validationController = new ValidationController();

import path from "path";

router.use(express.static(path.resolve(__dirname, '../validations/L1-validations/page')));
router.post(
    "/:action",
    validationController.validateRequestBodyNp,
    validationController.validateL0,
    validationController.validateL1,
    (req, res, next) => {
        res.send(setAckResponse(true));
    }
);

router.get("/", (req, res) => {
    res.sendFile(
        path.resolve(__dirname, "../validations/L1-validations/page/index.html")
    );
});

export default router;
