import { Router } from "express";
import examplesRoutes from "routes/v1/auth.routes";

const router = Router();

router.use("/v1/auth", examplesRoutes);

export default router;
