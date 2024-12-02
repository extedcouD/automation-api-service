import { NextFunction, Request, Response } from "express";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import { saveContextData } from "../utils/data-utils/cache-utils";
import { DataService } from "../services/data-service";
import { setIneternalServerNack } from "../utils/ackUtils";

export class DataController {
	dbUrl: string;
	dataService: DataService;
	constructor() {
		if (process.env.DATA_BASE_URL) {
			this.dbUrl = process.env.DATA_BASE_URL;
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
			await this.dataService.saveRequestToDB(context, payload, this.dbUrl);
			next();
		} catch (err) {
			logger.error("Error in saving data to DB", err);
			Response.status(200).send(setIneternalServerNack);
		}
	};
	// Middleware: Save context data
	saveTransactionInCache = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const body = req.body;
			await saveContextData(body.context);
			next();
		} catch (err) {
			logger.error("Error in saving context data to cache", err);
			res.status(200).send(setIneternalServerNack);
		}
	};
}
