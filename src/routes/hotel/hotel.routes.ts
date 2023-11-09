import { Router } from "express";
import {
  createHotelController,
  updateHotelController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares/verify/verifyTokenIsValid";
import {
  deleteHotelController,
  listHotelByIdController,
  listHotelController,
} from "../../controllers/hotel/hotel.controller";

export const hotelRouter: Router = Router();

hotelRouter.post("", validateTokenMiddleware, createHotelController);
hotelRouter.get("/:id", listHotelByIdController);
hotelRouter.get("", listHotelController);
hotelRouter.patch("/:id", validateTokenMiddleware, updateHotelController);
hotelRouter.delete("/:id", validateTokenMiddleware, deleteHotelController);
