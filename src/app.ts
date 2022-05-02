import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "routes";
import trace from "utils/trace";
import logger from "middlewares/logger";
import errorHandler from "middlewares/errorHandler";
import jwtHandler from "middlewares/jwtHandler";
import { getDate, getDateTime, getTime } from "utils/getDate";

const PORT: number | string = process.env.PORT || 8080;

const app: Application = express();
dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));
app.use(jwtHandler);
app.use(logger);
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  trace(`Server start on port: ${PORT}`);

  console.log("Date()", getDate());
  console.log("Time()", getTime());
  console.log("GetDateTime()", getDateTime());

  console.log(
    "\x1b[32m",
    `======================= Server start on port : ${PORT} =======================`,
    "\x1b[0m"
  );
});
