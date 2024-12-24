import { NextFunction, Request, Response } from "express";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import {
	saveContextData,
	savePayloadData,
} from "../utils/data-utils/cache-utils";
import { DataService } from "../services/data-service";
import { setIneternalServerNack } from "../utils/ackUtils";
import { computeSubscriberUri } from "../utils/subsciber-utils";

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

	// Middleware: Save context data
	saveContextInCacheNp = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const body = req.body;
			const { action } = req.params;
			const subscriberUrl = computeSubscriberUri(body.context, action, false);
			await saveContextData(body.context, subscriberUrl);
			next();
		} catch (err) {
			logger.error("Error in saving context data to cache");
			res.status(200).send(setIneternalServerNack);
		}
	};

	saveContextInCacheMock = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const body = req.body;
			const subscriberUrl =
				(req.query.subscriberUrl as string) ??
				computeSubscriberUri(req.body.context, req.params.action, true);
			await saveContextData(body.context, subscriberUrl);
			next();
		} catch (err) {
			logger.error("Error in saving context data to cache");
			res.status(200).send(setIneternalServerNack);
		}
	};

	savePayloadInCache(req: Request, responseBody: any, fromMock: boolean) {
		logger.info("Saving payload data to cache");
		let url = computeSubscriberUri(
			req.body.context,
			req.params.action,
			fromMock
		);
		if (fromMock) {
			url = (req.query.subscriberUrl as string) ?? url;
		}
		console.log("sub URL", url);
		// add .context
		savePayloadData(req.body, responseBody, url)
			.then(() => logger.info("Payload data saved to cache"))
			.catch((err) => logger.error("Error in saving payload data to cache"));
	}

	savePayloadInDb(
		req: Request,
		responseBody: any,
		fromMock: boolean,
		code: number
	) {
		let url = computeSubscriberUri(
			req.body.context,
			req.params.action,
			fromMock
		);
		if (fromMock) {
			url = (req.query.subscriberUrl as string) ?? url;
		}
		this.dataService
			.saveSessionToDB(url, req.body, responseBody, code)
			.catch((err) => logger.error("Error in saving payload data to DB", err));
	}
}
