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
class DataController {
    constructor() {
        this.saveDataToDb = (Request, Response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = Request.body;
                const context = payload.context;
                yield this.dataService.saveRequestToDB(context, payload, this.dbUrl);
                next();
            }
            catch (err) {
                logger_1.default.error(err);
                Response.status(200).send(ackUtils_1.setIneternalServerNack);
            }
        });
        // Middleware: Save context data
        this.saveTransactionInCache = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield (0, cache_utils_1.saveContextData)(body.context);
                next();
            }
            catch (err) {
                logger_1.default.error(err);
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
}
exports.DataController = DataController;
