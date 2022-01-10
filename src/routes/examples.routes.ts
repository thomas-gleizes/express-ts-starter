import { Router } from "express";
import ExampleController from "../controllers/example.controller";

const router = Router();

router.get("/", (req, res) => {
  res.send({ examples: "true" });
});

export default router;
