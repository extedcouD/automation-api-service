"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
const { combine, timestamp, printf, colorize, errors } = winston_1.default.format;
// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${message} ${stack || ""}`;
});
// Determine log level based on environment
const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";
// Configure Winston logger
const logger = winston_1.default.createLogger({
    level: logLevel,
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), // Include stack trace in error messages
    logFormat),
    transports: [
        // Console logging with colorization
        new winston_1.default.transports.Console({
            format: combine(colorize(), logFormat),
        }),
        // Daily file rotation for persistent logs
        new winston_1.default.transports.DailyRotateFile({
            dirname: "logs", // Log files directory
            filename: "application-%DATE%.log", // Log file naming pattern
            datePattern: "YYYY-MM-DD", // Date pattern for log file rotation
            maxFiles: "30d", // Retain logs for 30 days
            zippedArchive: true, // Compress archived log files
        }),
    ],
});
exports.default = logger;
