import express from "express";
import { CommunicationController } from "../controllers/communication-controller";
import { DataController } from "../controllers/data-controller";
import { ValidationController } from "../controllers/validation-controller";

const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const commController = new CommunicationController();
const dbController = new DataController();
const validationController = new ValidationController();

router.post(
	"/:action",
	validationController.validateRequestBody,
	validationController.validateL0,
	// dbController.saveTransactionInCache,
	// dbController.saveDataToDb,
	commController.handleRequestFromMockServer
);

export default router;
