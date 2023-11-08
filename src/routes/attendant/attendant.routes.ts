import { Router } from "express";
import {
  createAttendantController,
  deleteAttendantController,
  loginAttendantController,
  updateAttendantController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const attendantRouter: Router = Router();

attendantRouter.post("", validateTokenMiddleware, createAttendantController);
attendantRouter.post(
  "/login",
  validateTokenMiddleware,
  loginAttendantController
);
attendantRouter.patch(
  "/:id",
  validateTokenMiddleware,
  updateAttendantController
);
attendantRouter.delete(
  "/:id",
  validateTokenMiddleware,
  deleteAttendantController
);
