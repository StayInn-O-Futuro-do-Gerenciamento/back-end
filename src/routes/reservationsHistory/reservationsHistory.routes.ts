import { Router } from "express";
import {
  listReservationsHistoryController,
  listReservationsHistoryControllerBYFilter,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const reservationsHistoryRouter: Router = Router();

reservationsHistoryRouter.get(
  "",
  validateTokenMiddleware,
  listReservationsHistoryController
);

reservationsHistoryRouter.get(
  "/:filter/:value",
  validateTokenMiddleware,
  listReservationsHistoryControllerBYFilter
);
