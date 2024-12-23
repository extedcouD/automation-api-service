"use strict";
// import winston from "winston";
// import "winston-daily-rotate-file";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { combine, timestamp, printf, colorize, errors } = winston.format;
// // Custom log format
// const logFormat = printf(({ level, message, timestamp, stack }) => {
// 	return `${timestamp} [${level}]: ${message} ${stack || ""}`;
// });
// // Determine log level based on environment
// const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";
// // Configure Winston logger
// const logger = winston.createLogger({
// 	level: logLevel,
// 	format: combine(
// 		timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
// 		errors({ stack: true }), // Include stack trace in error messages
// 		logFormat
// 	),
// 	transports: [
// 		// Console logging with colorization
// 		new winston.transports.Console({
// 			format: combine(colorize(), logFormat),
// 		}),
// 		// Daily file rotation for persistent logs
// 		new winston.transports.DailyRotateFile({
// 			dirname: "logs", // Log files directory
// 			filename: "application-%DATE%.log", // Log file naming pattern
// 			datePattern: "YYYY-MM-DD", // Date pattern for log file rotation
// 			maxFiles: "30d", // Retain logs for 30 days
// 			zippedArchive: true, // Compress archived log files
// 		}),
// 	],
// });
// export default logger;
const winston_1 = __importDefault(require("winston"));
const chalk_1 = __importDefault(require("chalk"));
const { combine, timestamp, printf, errors } = winston_1.default.format;
// Define colors for log levels and messages
const levelColors = {
    error: chalk_1.default.bold.red, // Bright red for errors
    warn: chalk_1.default.hex("#FFA500"), // Orange for warnings
    info: chalk_1.default.blue, // Blue for information
    debug: chalk_1.default.green, // Green for debugging
    default: chalk_1.default.white, // Default color for others
};
const messageColors = {
    error: chalk_1.default.redBright, // Highlight error messages
    warn: chalk_1.default.yellowBright, // Bright yellow for warnings
    info: chalk_1.default.cyan, // Cyan for information messages
    debug: chalk_1.default.magentaBright, // Bright magenta for debugging
    default: chalk_1.default.gray, // Default gray for fallback
};
// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
    const levelColor = levelColors[level] || levelColors.default; // Colorize level
    const messageColor = messageColors[level] || messageColors.default; // Colorize message
    const coloredLevel = levelColor(`[${level.toUpperCase()}]`); // Apply color to log level
    const coloredTimestamp = chalk_1.default.dim(timestamp); // Dim timestamp
    const coloredMessage = messageColor(message); // Apply message-specific color
    const coloredStack = stack ? chalk_1.default.dim(stack) : ""; // Dim stack trace if present
    return `${coloredTimestamp} ${coloredLevel}: ${coloredMessage} ${coloredStack}`;
});
// Determine log level based on environment
const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";
// Configure Winston logger
const logger = winston_1.default.createLogger({
    level: logLevel,
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), // Include stack trace in error messages
    logFormat),
    transports: [
        // Console transport with colorized output
        new winston_1.default.transports.Console(),
    ],
});
exports.default = logger;
