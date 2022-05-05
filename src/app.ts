import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "routes";
import trace from "utils/trace";
import logger from "middlewares/logger";
import errorHandler from "middlewares/errorHandler";
import jwtHandler from "middlewares/jwtHandler";

dotenv.config();
const PORT: number | string = process.env.PORT || 8080;

const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));
app.use(jwtHandler);
app.use(logger);
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  const message = `======================= Server start on port ${PORT} =======================`;
  trace(message);
  console.log("\x1b[32m", message, "\x1b[0m");
});
