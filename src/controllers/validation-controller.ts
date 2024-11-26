import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { setAckResponse } from "../utils/ackUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1Validations } from "../validations/L1-validations";
import { saveContextData } from "../utils/data-utils/cache-utils";
import { performContextValidations } from "../utils/data-utils/validateContext";
import { getPublicKeys } from "../utils/headerUtils";
import { isHeaderValid } from "ondc-crypto-sdk-nodejs";
export class ValidationController {
	async validateSignature(req: Request, res: Response, next: NextFunction) {
		try {
			const header = JSON.stringify(req.headers);
			const body = JSON.stringify(req.body);
			const valid = await isHeaderValid({
				header: header,
				body: body,
				publicKey: await getPublicKeys(header, body),
			});
			if (!valid) {
				res
					.status(200)
					.send(setAckResponse(false, "Invalid Signature", "10001"));
				return;
			}
			next();
		} catch (error) {
			res.status(200).send(setAckResponse(false, "Invalid Signature", "10001"));
			return;
		}
	}
	// Middleware: Validate request body
	async validateRequestBody(req: Request, res: Response, next: NextFunction) {
		const body = req.body;

		if (!body || !body.context || !body.context.action) {
			logger.error("Invalid request body", body);
			res.status(400).send("Bad Request");
			return;
		}

		next();
	}

	// Middleware: L0 validations
	validateL0(req: Request, res: Response, next: NextFunction) {
		const { action } = req.body.context.action;
		const body = req.body;

		const l0Result = performL0Validations(body, action);
		if (!l0Result.valid) {
			res.status(200).send(setAckResponse(false, l0Result.errors, "400"));
			return;
		}

		next();
	}

	// Middleware: L1 validations
	validateL1(req: Request, res: Response, next: NextFunction) {
		const { action } = req.params;
		const body = req.body;

		const l1Result = performL1Validations(action, body);
		if (!l1Result.valid) {
			const { error } = l1Result;
			res
				.status(200)
				.send(setAckResponse(false, error?.message, error?.code?.toString()));
			return;
		}

		next();
	}

	// Middleware: Context validations
	async validateContext(req: Request, res: Response, next: NextFunction) {
		const { action } = req.params;
		const body = req.body;

		const contextValidations = await performContextValidations(action, body);
		if (!contextValidations.valid) {
			res
				.status(200)
				.send(setAckResponse(false, contextValidations.error, "400"));
			return;
		}

		next();
	}

	// Middleware: Save context data
	async saveTransactionInCache(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const body = req.body;
		await saveContextData(body.context);
		next();
	}
}
