import express from "express";
import {CommunicationController} from "../controllers/communication-controller";
import {DataController} from "../controllers/data-controller";
import {ValidationController} from "../controllers/validation-controller";
import logger from "../utils/logger";

const router = express();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

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
                // Check if the cache has already been updated
                if (!res.locals.isCacheUpdated) {
                    res.locals.isCacheUpdated = true; // Flag to ensure cache update happens only once
                    const statusCode = res.statusCode;
                    if (statusCode !== 200) {
                        logger.info(
                            "API service response status code is not 200",
                            statusCode
                        );
                    }
                    // Save the request and response in the cache
                    dbController.savePayloadInCache(req, body, true);
                    dbController.savePayloadInDb(req, body, true, statusCode);

                    // Log the response being sent
                    logger.info("Sending response to: " + JSON.stringify(body));
                }
                return originalSend.call(this, body); // Call the original send method
            };
        }
        next(); // Proceed to the next middleware
    },
    validationController.validateL0,
    validationController.validateContextFromMock,
    dbController.saveContextInCacheMock,
    commController.handleRequestFromMockServer
);

export default router;
