import express, { Request, Response } from "express";
import logger from "../utils/logger";
import { getPublicKeys } from "../utils/headerUtils";
import { isHeaderValid } from "ondc-crypto-sdk-nodejs";
import { setAckResponse } from "../utils/ackUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1Validations } from "../validations/L1-validations";

const router = express();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/:action", (req: Request, res: Response) => {
	const { action } = req.params;
	const body = req.body;
	logger.info(`Action: ${action}`);
	if (body && body.context) {
		const l0Result = performL0Validations(body, action);
		if (!l0Result.valid) {
			res
				.status(200)
				.send(setAckResponse(l0Result.valid, l0Result.errors, "400"));
		}
		const l1Result = performL1Validations(action, body);
		res.status(200).send(setAckResponse(l1Result.valid, l1Result.error, "400"));
	} else {
		logger.error("body", body);
		res.status(400).send("Bad Request");
	}
});

export default router;
