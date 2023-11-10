import { Router } from "express";
import { createReservationController } from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const reservationsRouter: Router = Router();

reservationsRouter.post(
  "",
  validateTokenMiddleware,
  createReservationController
);
