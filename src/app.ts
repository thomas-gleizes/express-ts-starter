import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import * as routes from "./routes";

const PORT: number | string = process.env.PORT || 8080;

const app: Application = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));

app.all("*", (req, res, next) => {
  console.log(`request received on : ${req.path}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello world", success: true });
});

app.use("/api/examples", routes.examples);

app.listen(PORT, () =>
  console.log(
    "\x1b[32m",
    `======================= Server start on port : ${PORT} =======================`,
    "\x1b[0m"
  )
);
