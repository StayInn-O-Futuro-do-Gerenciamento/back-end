import { Router } from "express";
import {
  createAttendantController,
  deleteAttendantController,
  loginAttendantController,
  updateAttendantController,
} from "../../controllers";

export const attendantRouter: Router = Router();

attendantRouter.post("", createAttendantController);
attendantRouter.post("/login",loginAttendantController)
attendantRouter.patch("/:id", updateAttendantController);
attendantRouter.delete("/:id", deleteAttendantController);
