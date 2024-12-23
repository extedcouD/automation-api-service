"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./utils/logger"));
const serverConfig_1 = require("./config/serverConfig");
const public_routes_1 = __importDefault(require("./routes/public-routes"));
const ackUtils_1 = require("./utils/ackUtils");
const private_routes_1 = __importDefault(require("./routes/private-routes"));
const createServer = () => {
    const app = (0, express_1.default)();
    // Middleware
    app.use(express_1.default.json({ limit: "50mb" }));
    app.use((0, cors_1.default)());
    // Log all requests in development
    if (serverConfig_1.config.port !== "production") {
        app.use((req, res, next) => {
            logger_1.default.debug(`${req.method} ${req.url}`);
            next();
        });
    }
    // Routes
    app.use("/api", public_routes_1.default);
    app.use("/mock", private_routes_1.default);
    // Health Check
    app.get("/health", (req, res) => {
        res.status(200).send((0, ackUtils_1.setAckResponse)(true));
    });
    // Error Handling Middleware
    app.use((err, req, res, next) => {
        logger_1.default.error(err.message, { stack: err.stack });
        res.status(200).send(ackUtils_1.setIneternalServerNack);
    });
    return app;
};
exports.default = createServer;
