import { Router } from "express";
import { createAttendantController, updateAttendantController } from "../../controllers";

export const attendantRouter: Router = Router();

attendantRouter.post("", createAttendantController);
attendantRouter.patch("/:id", updateAttendantController)
