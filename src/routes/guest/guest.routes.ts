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
guestRouter.get("", validateTokenMiddleware, getGuestController);
guestRouter.patch("/:id", validateTokenMiddleware, updateGuestController);
guestRouter.delete("/:id", validateTokenMiddleware, deleteGuestController);
