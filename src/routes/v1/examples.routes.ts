import { Router } from "express";

import handler from "../../lib/handler";
import ExampleController from "../../controllers/example.controller";

const router = Router();

router.get("/", handler(ExampleController.index));
router.get("/:id", handler(ExampleController.index));

export default router;
