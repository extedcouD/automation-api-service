"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const serverConfig_1 = require("./config/serverConfig");
const logger_1 = __importDefault(require("./utils/logger"));
const ondc_automation_cache_lib_1 = require("ondc-automation-cache-lib");
const app = (0, server_1.default)();
ondc_automation_cache_lib_1.RedisService.useDb(0);
const server = app.listen(serverConfig_1.config.port, () => {
    logger_1.default.info(`Server running on port ${serverConfig_1.config.port} in ${serverConfig_1.config.environment} mode`);
});
// Graceful Shutdown
process.on("SIGTERM", () => {
    logger_1.default.info("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        logger_1.default.info("HTTP server closed");
    });
});
process.on("SIGINT", () => {
    logger_1.default.info("SIGINT signal received: closing HTTP server");
    server.close(() => {
        logger_1.default.info("HTTP server closed");
    });
});
