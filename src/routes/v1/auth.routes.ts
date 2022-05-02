import { Router } from "express";

import AuthController from "controllers/auth.controller";
import isAuthenticated from "middlewares/isAuthenticated";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/", isAuthenticated, AuthController.showMe);

export default router;
