import { Router } from "express";
import {
  createReservationController,
  deleteReservationController,
  listReservationByIdController,
  listReservationController,
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

reservationsRouter.delete(
  "/:id",
  validateTokenMiddleware,
  deleteReservationController
);

reservationsRouter.get("", validateTokenMiddleware, listReservationController);

reservationsRouter.get(
  "/:id",
  validateTokenMiddleware,
  listReservationByIdController
);
