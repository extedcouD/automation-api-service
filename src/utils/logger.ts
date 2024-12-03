import winston from "winston";
import "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} [${level}]: ${message} ${stack || ""}`;
});

// Determine log level based on environment
const logLevel = process.env.NODE_ENV === "production" ? "info" : "debug";

// Configure Winston logger
const logger = winston.createLogger({
	level: logLevel,
	format: combine(
		timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		errors({ stack: true }), // Include stack trace in error messages
		logFormat
	),
	transports: [
		// Console logging with colorization
		new winston.transports.Console({
			format: combine(colorize(), logFormat),
		}),

		// Daily file rotation for persistent logs
		new winston.transports.DailyRotateFile({
			dirname: "logs", // Log files directory
			filename: "application-%DATE%.log", // Log file naming pattern
			datePattern: "YYYY-MM-DD", // Date pattern for log file rotation
			maxFiles: "30d", // Retain logs for 30 days
			zippedArchive: true, // Compress archived log files
		}),
	],
});

export default logger;
