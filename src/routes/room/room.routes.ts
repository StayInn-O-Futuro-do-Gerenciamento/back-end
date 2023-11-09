import { Router } from "express";
import { createRoomController } from "../../controllers";

export const roomRouter: Router = Router();

roomRouter.post("", createRoomController);
