import { Router } from "express";
import {
  listTypeRoomController,
  updateTypeRoomController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const typeRoomRouter: Router = Router();

typeRoomRouter.get("", validateTokenMiddleware, listTypeRoomController);

typeRoomRouter.patch("/:id", validateTokenMiddleware, updateTypeRoomController);
