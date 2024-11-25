import express, { Request, Response } from "express";
import logger from "../utils/logger";
import { setAckResponse } from "../utils/ackUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1Validations } from "../validations/L1-validations";
import { saveContextData } from "../utils/data-utils/cache-utils";
import validateSignature from "../middlewares/authentication";
import { performContextValidations } from "../utils/data-utils/validateContext";

const router = express();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.all("*", validateSignature);

router.post("/:action", async (req: Request, res: Response) => {
	const { action } = req.params;
	const body = req.body;
	logger.info(`Action: ${action}`);
	if (body && body.context) {
		const l0Result = performL0Validations(body, action);
		if (!l0Result.valid) {
			res
				.status(200)
				.send(setAckResponse(l0Result.valid, l0Result.errors, "400"));
			return;
		}
		const l1Result = performL1Validations(action, body);
		if (!l1Result.valid) {
			res
				.status(200)
				.send(
					setAckResponse(
						l1Result.valid,
						l1Result.error?.message,
						l1Result.error?.code.toString()
					)
				);
			return;
		}
		const contextValidations = await performContextValidations(action, body);
		if (!contextValidations.valid) {
			res
				.status(200)
				.send(
					setAckResponse(
						contextValidations.valid,
						contextValidations.error,
						"400"
					)
				);
			return;
		}
		saveContextData(body.context);
		res.status(200).send(setAckResponse(true));
	} else {
		logger.error("body", body);
		res.status(400).send("Bad Request");
	}
});

export default router;
