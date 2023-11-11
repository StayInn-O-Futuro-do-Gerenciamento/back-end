import { Router } from "express";
import {
  createReservationController,
  updateReservationController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const reservationsRouter: Router = Router();

reservationsRouter.post(
  "",
  validateTokenMiddleware,
  createReservationController
);

reservationsRouter.patch(
  "/:id",
  validateTokenMiddleware,
  updateReservationController
);
