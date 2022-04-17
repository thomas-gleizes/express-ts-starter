import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";
import logger from "./middlewares/logger";

const PORT: number | string = process.env.PORT || 8080;

const app: Application = express();
dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));
app.use(logger)
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    "\x1b[32m",
    `======================= Server start on port : ${PORT} =======================`,
    "\x1b[0m"
  )
);
