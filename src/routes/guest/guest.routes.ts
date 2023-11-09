import { Router } from "express";
import {
  createGuestController,
  deleteGuestController,
  updateGuestController,
} from "../../controllers";

export const guestRouter: Router = Router();

guestRouter.post("", createGuestController);
guestRouter.patch("/:id", updateGuestController);
guestRouter.delete("/:id", deleteGuestController);
