import "express-async-errors";
import cors from "cors";
import {
  attendantRouter,
  guestRouter,
  hotelRouter,
  managerRouter,
  roomRouter,
} from "./routes";
import { handleErrors } from "./errors";
import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/manager", managerRouter);
app.use("/attendant", attendantRouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use("/guest", guestRouter);

app.use(handleErrors);
export default app;
