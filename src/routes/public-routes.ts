import express from "express";
import {ValidationController} from "../controllers/validation-controller";
import {CommunicationController} from "../controllers/communication-controller";
import {DataController} from "../controllers/data-controller";

const router = express();
router.use(express.json());
router.use(express.urlencoded({extended: true}));

const validationController = new ValidationController();
const commController = new CommunicationController();
const dbController = new DataController();

router.post(
    "/:action",
    // validationController.validateSignature,
    validationController.validateRequestBody,
    validationController.validateL0,
    validationController.validateL1,
    validationController.validateSessionFromNp,
    validationController.validateContextFromNp,
    dbController.saveTransactionInCacheNp,
    commController.forwardToMockServer
);

export default router;
