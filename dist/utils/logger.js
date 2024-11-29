"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
const { combine, timestamp, printf, colorize, errors } = winston_1.default.format;
// Define custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});
// Configure Winston logger
const logger = winston_1.default.createLogger({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), // Captures stack trace in error messages
    logFormat),
    transports: [
        // Console logging for development
        new winston_1.default.transports.Console({
            format: combine(colorize(), logFormat),
        }),
        // Daily file rotation for production logs
        new winston_1.default.transports.DailyRotateFile({
            dirname: "logs",
            filename: "application-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            maxFiles: "30d", // Keep logs for 30 days
            zippedArchive: true,
        }),
    ],
});
exports.default = logger;
