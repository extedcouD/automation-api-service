import express from "express";
import { CommunicationController } from "../controllers/communication-controller";
import { DataController } from "../controllers/data-controller";
import { ValidationController } from "../controllers/validation-controller";
import logger from "../utils/logger";
import { v4 as uuidV4 } from "uuid";

const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const commController = new CommunicationController();
const dbController = new DataController();
const validationController = new ValidationController();

router.post(
	"/:action",
	validationController.validateRequestBodyMock,
	validationController.validateSessionFromMock,
	(req, res, next) => {
		// Ensure `res.send` is wrapped only once
		if (!res.locals.isSendWrapped) {
			res.locals.isSendWrapped = true; // Flag to indicate the wrapping is done
			const originalSend = res.send;
			res.send = function (body) {
				if (!res.locals.isCacheUpdated) {
					res.locals.isCacheUpdated = true; // Flag to ensure cache update happens only once
					const statusCode = res.statusCode;
					if (statusCode !== 200) {
						logger.info(
							"API service response status code is not 200",
							statusCode
						);
					}
					const payloadID = uuidV4();
					dbController.savePayloadInCache(req, body, true, payloadID);
					dbController.savePayloadInDb(req, body, true, statusCode, payloadID);
					logger.info("Sending response to: " + JSON.stringify(body));
				}
				return originalSend.call(this, body); // Call the original send method
			};
		}
		next();
	},
	validationController.validateL0,
	validationController.validateContextFromMock,
	dbController.saveContextInCacheMock,
	commController.handleRequestFromMockServer
);

export default router;
