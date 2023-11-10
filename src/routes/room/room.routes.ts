import { Router } from "express";
import {
  createRoomController,
  listRoomController,
  updateRoomController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const roomRouter: Router = Router();

roomRouter.post("", validateTokenMiddleware, createRoomController);

roomRouter.get("", validateTokenMiddleware, listRoomController);

roomRouter.patch("/:id", validateTokenMiddleware, updateRoomController);
