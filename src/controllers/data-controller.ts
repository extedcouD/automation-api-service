import { NextFunction, Request, Response } from "express";
import { BecknContext } from "../models/beckn-types";
import logger from "../utils/logger";
import {
	saveContextData,
	savePayloadData,
} from "../utils/data-utils/cache-utils";
import { DataService } from "../services/data-service";
import { setInternalServerNack } from "../utils/ackUtils";
import { computeSubscriberUri } from "../utils/subsciber-utils";
import { saveLog } from "../utils/data-utils/cache-utils";

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
		const transactionId = req.body.context.transaction_id;
		try {
			await saveLog(transactionId, 'Saving context data to cache for NP request');
			const body = req.body;
			const { action } = req.params;
			const subscriberUrl = computeSubscriberUri(body.context, action, false);
			await saveContextData(body.context, subscriberUrl);
			await saveLog(transactionId, 'Successfully saved context data to cache');
			next();
		} catch (err) {
			await saveLog(transactionId, `Error saving context data to cache: ${err}`, 'error');
			logger.error("Error in saving context data to cache");
			res.status(200).send(setInternalServerNack);
		}
	};

	saveContextInCacheMock = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const transactionId = req.body.context.transaction_id;
		try {
			await saveLog(transactionId, 'Saving context data to cache for Mock request');
			const body = req.body;
			const subscriberUrl =
				(req.query.subscriber_url as string) ??
				computeSubscriberUri(req.body.context, req.params.action, true);
			await saveContextData(body.context, subscriberUrl);
			await saveLog(transactionId, 'Successfully saved context data to cache');
			next();
		} catch (err) {
			await saveLog(transactionId, `Error saving context data to cache: ${err}`, 'error');
			logger.error("Error in saving context data to cache");
			res.status(200).send(setInternalServerNack);
		}
	};

	savePayloadInCache(
		req: Request,
		responseBody: any,
		fromMock: boolean,
		reqId: string
	) {
		const transactionId = req.body.context.transaction_id;
		logger.info("Saving payload data to cache");
		saveLog(transactionId, 'Saving payload data to cache');
		
		let url = computeSubscriberUri(
			req.body.context,
			req.params.action,
			fromMock
		);
		if (fromMock) {
			url = (req.query.subscriber_url as string) ?? url;
		}
		console.log("sub URL", url);

		savePayloadData(req.body.context, responseBody, reqId, url)
			.then(() => {
				logger.info("Payload data saved to cache");
				saveLog(transactionId, 'Successfully saved payload data to cache');
			})
			.catch((err) => {
				logger.error("Error in saving payload data to cache");
				saveLog(transactionId, `Error saving payload data to cache: ${err}`, 'error');
			});
	}

	savePayloadInDb(
		req: Request,
		responseBody: any,
		fromMock: boolean,
		code: number,
		reqId: string
	) {
		const transactionId = req.body.context.transaction_id;
		saveLog(transactionId, 'Saving payload data to database');
		
		let url = computeSubscriberUri(
			req.body.context,
			req.params.action,
			fromMock
		);
		if (fromMock) {
			url = (req.query.subscriber_url as string) ?? url;
		}
		this.dataService
			.saveSessionToDB(url, req.body, responseBody, code, reqId)
			.then(() => saveLog(transactionId, 'Successfully saved payload data to database'))
			.catch((err) => {
				logger.error("Error in saving payload data to DB", err);
				saveLog(transactionId, `Error saving payload data to database: ${err}`, 'error');
			});
	}
}
