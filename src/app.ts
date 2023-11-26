import "express-async-errors";
import cors from "cors";
import {
  attendantRouter,
  guestRouter,
  hotelRouter,
  managerRouter,
  reservationsRouter,
  roomRouter,
  typeRoomRouter,
  reservationsHistoryRouter,
  offerRouter,
  loginRouter,
} from "./routes";
import { handleErrors } from "./errors";
import express, { Application } from "express";
import { wppConnectRouter } from "./routes/wpp";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/manager", managerRouter);
app.use("/attendant", attendantRouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use("/guest", guestRouter);
app.use("/typeRoom", typeRoomRouter);
app.use("/reservation", reservationsRouter);
app.use("/history", reservationsHistoryRouter);
app.use("/offer", offerRouter);
app.use("/login", loginRouter);
app.use("/wpp", wppConnectRouter);

app.use(handleErrors);
export default app;
