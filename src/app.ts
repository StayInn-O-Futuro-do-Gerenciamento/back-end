import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { managerRouter } from "./routes";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/manager", managerRouter);

export default app;
