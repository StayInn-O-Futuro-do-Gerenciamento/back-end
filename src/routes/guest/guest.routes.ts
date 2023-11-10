import { Router } from "express";
import {
  createGuestController,
  deleteGuestController,
  getGuestController,
  updateGuestController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const guestRouter: Router = Router();

guestRouter.post("", validateTokenMiddleware, createGuestController);
guestRouter.get("", getGuestController);
guestRouter.patch("/:id", updateGuestController);
guestRouter.delete("/:id", validateTokenMiddleware, deleteGuestController);
