import createServer from "./server";
import { config } from "./config/serverConfig";
import logger from "./utils/logger";
import { RedisService } from "ondc-automation-cache-lib";
import { demoLogFunctionality } from "./utils/data-utils/cache-utils";

const app = createServer();
RedisService.useDb(0);

const server = app.listen(config.port, () => {
	logger.info(
		`Server running on port ${config.port} in ${config.environment} mode`
	);
	// Example usage:
	demoLogFunctionality()
	.then(() => console.log('Log demo completed'))
	.catch(err => console.error('Log demo failed:', err));
});

// Graceful Shutdown
process.on("SIGTERM", () => {
	logger.info("SIGTERM signal received: closing HTTP server");
	server.close(() => {
		logger.info("HTTP server closed");
	});
});

process.on("SIGINT", () => {
	logger.info("SIGINT signal received: closing HTTP server");
	server.close(() => {
		logger.info("HTTP server closed");
	});
});
