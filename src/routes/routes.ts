import { Router } from "express";
import logger from "../utils/logger";

const router = Router();

router.post("/", (req, res) => {
  logger.debug("inside route");
});

export default router;
