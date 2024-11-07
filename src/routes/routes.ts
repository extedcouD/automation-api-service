import { Router } from "express";
import logger from "../utils/logger";
import { getPublicKeys } from "../utils/headerUtils";

const router = Router();

router.get("/", (req, res) => {
  logger.debug("inside route");
});

export default router;
