import { Router } from "express";
import { createGuestController } from "../../controllers";

export const guestRouter: Router = Router();

guestRouter.post("", createGuestController);
