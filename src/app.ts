import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import {
  attendantRouter,
  guestRouter,
  managerRouter,
  hotelRouter,
} from "./routes";

import { handleErrors } from "./errors";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/manager", managerRouter);
app.use("/attendant", attendantRouter);

app.use("/guest", guestRouter);

app.use("/hotel", hotelRouter);

app.use(handleErrors);
export default app;
