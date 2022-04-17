import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes";

const PORT: number | string = process.env.PORT || 8080;

const app: Application = express();
dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(
    "\x1b[32m",
    `======================= Server start on port : ${PORT} =======================`,
    "\x1b[0m"
  )
);
