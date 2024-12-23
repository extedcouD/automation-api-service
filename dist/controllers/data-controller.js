"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const cache_utils_1 = require("../utils/data-utils/cache-utils");
const data_service_1 = require("../services/data-service");
const ackUtils_1 = require("../utils/ackUtils");
const subsciber_utils_1 = require("../utils/subsciber-utils");
class DataController {
    constructor() {
        // Middleware: Save context data
        this.saveContextInCacheNp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { action } = req.params;
                const subscriberUrl = (0, subsciber_utils_1.computeSubscriberUri)(body.context, action, false);
                yield (0, cache_utils_1.saveContextData)(body.context, subscriberUrl);
                next();
            }
            catch (err) {
                logger_1.default.error("Error in saving context data to cache");
                res.status(200).send(ackUtils_1.setIneternalServerNack);
            }
        });
        this.saveContextInCacheMock = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const body = req.body;
                const subscriberUrl = (_a = req.query.subscriberUrl) !== null && _a !== void 0 ? _a : (0, subsciber_utils_1.computeSubscriberUri)(req.body.context, req.params.action, true);
                yield (0, cache_utils_1.saveContextData)(body.context, subscriberUrl);
                next();
            }
            catch (err) {
                logger_1.default.error("Error in saving context data to cache");
                res.status(200).send(ackUtils_1.setIneternalServerNack);
            }
        });
        if (process.env.DATA_BASE_URL) {
            this.dbUrl = process.env.DATA_BASE_URL;
            this.dataService = new data_service_1.DataService();
            console.log("Data Controller initialized", this.dbUrl);
            return;
        }
        throw new Error("DB_URL not found in environment variables");
    }
    savePayloadInCache(req, responseBody, fromMock) {
        var _a;
        logger_1.default.info("Saving payload data to cache");
        let url = (0, subsciber_utils_1.computeSubscriberUri)(req.body.context, req.params.action, fromMock);
        if (fromMock) {
            url = (_a = req.query.subscriberUrl) !== null && _a !== void 0 ? _a : url;
        }
        console.log("sub URL", url);
        (0, cache_utils_1.savePayloadData)(req.body.context, responseBody, url)
            .then(() => logger_1.default.info("Payload data saved to cache"))
            .catch((err) => logger_1.default.error("Error in saving payload data to cache"));
    }
    savePayloadInDb(req, responseBody, fromMock, code) {
        var _a;
        let url = (0, subsciber_utils_1.computeSubscriberUri)(req.body.context, req.params.action, fromMock);
        if (fromMock) {
            url = (_a = req.query.subscriberUrl) !== null && _a !== void 0 ? _a : url;
        }
        this.dataService
            .saveSessionToDB(url, req.body, responseBody, code)
            .catch((err) => logger_1.default.error("Error in saving payload data to DB", err));
    }
}
exports.DataController = DataController;
