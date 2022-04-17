import { Router } from "express";
import examplesRoutes from "./v1/examples.routes";

const router = Router();

router.use("/v1/examples", examplesRoutes);

export default router;