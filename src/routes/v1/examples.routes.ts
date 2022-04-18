import { Router } from "express";

import ExampleController from "../../controllers/example.controller";

const router = Router();

router.get("/", ExampleController.index);
router.post("/", ExampleController.create);
router.get("/:id", ExampleController.show);

export default router;
