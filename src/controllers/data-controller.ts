import {NextFunction, Request, Response} from "express";
import {BecknContext} from "../models/beckn-types";
import logger from "../utils/logger";
import {saveContextData} from "../utils/data-utils/cache-utils";
import {DataService} from "../services/data-service";
import {setIneternalServerNack} from "../utils/ackUtils";
import {computeSubsciberUri} from "../utils/subsciber-utils";

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
    saveTransactionInCacheNp = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const body = req.body;
            const {action} = req.params;
            const subscriberUrl = computeSubsciberUri(body.context, action, false);
            await saveContextData(body.context, subscriberUrl);
            next();
        } catch (err) {
            logger.error("Error in saving context data to cache", err);
            res.status(200).send(setIneternalServerNack);
        }
    };

    saveTransactionInCacheMock = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const body = req.body;
            const subscriberUrl = req.query.subscriberUrl as string ?? computeSubsciberUri(req.body.context, req.params.action, true);
            await saveContextData(body.context, subscriberUrl);
            next();
        } catch (err) {
            logger.error("Error in saving context data to cache", err);
            res.status(200).send(setIneternalServerNack);
        }
    };
}
