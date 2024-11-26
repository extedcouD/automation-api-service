import { NextFunction, Request, Response } from "express";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import { DataService } from "../services/data-Service";

export class DataController {
	dbUrl: string;
	dataService: DataService;
	constructor() {
		if (process.env.PERSISTENT_DB_URL) {
			this.dbUrl = process.env.PERSISTENT_DB_URL;
			this.dataService = new DataService();
			return;
		}
		throw new Error("DB_URL not found in environment variables");
	}
	async saveDataToDb(Request: Request, Response: Response, next: NextFunction) {
		try {
			const payload = Request.body;
			const context = payload.context as BecknContext;
			await this.dataService.SaveToPresistantDB(context, payload, this.dbUrl);
			next();
		} catch (err) {
			logger.error(err);
			Response.status(500).send("Error in saving data to DB");
		}
	}
}
