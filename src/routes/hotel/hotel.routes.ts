import { Router } from "express";
import { createHotelController } from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares/verify/verifyTokenIsValid";

export const hotelRouter: Router = Router();

hotelRouter.post("", validateTokenMiddleware, createHotelController);
hotelRouter.get("");
hotelRouter.patch("/:id");
hotelRouter.delete("/:id");
