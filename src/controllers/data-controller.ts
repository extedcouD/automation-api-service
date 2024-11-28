import { NextFunction, Request, Response } from "express";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import { saveContextData } from "../utils/data-utils/cache-utils";
import { DataService } from "../services/data-service";
import { setAckResponse } from "../utils/ackUtils";

export class DataController {
	dbUrl: string;
	dataService: DataService;
	constructor() {
		if (process.env.PERSISTENT_DB_URL) {
			this.dbUrl = process.env.PERSISTENT_DB_URL;
			this.dataService = new DataService();
			console.log("Data Controller initialized", this.dbUrl);
			return;
		}
		throw new Error("DB_URL not found in environment variables");
	}

	saveDataToDb = async (
		Request: Request,
		Response: Response,
		next: NextFunction
	) => {
		try {
			const payload = Request.body;
			const context = payload.context as BecknContext;
			console.log("Saving data to DB", this.dbUrl);
			await this.dataService.SaveToPresistantDB(context, payload, this.dbUrl);
			next();
		} catch (err) {
			logger.error(err);
			Response.status(200).send(setAckResponse(true));
		}
	};
	// Middleware: Save context data
	saveTransactionInCache = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const body = req.body;
		await saveContextData(body.context);
		next();
	};
}
