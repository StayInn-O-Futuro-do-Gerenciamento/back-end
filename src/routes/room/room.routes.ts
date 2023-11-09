import { Router } from "express";
import { createRoomController } from "../../controllers";
import { validateTokenMiddleware, verifyIdMiddleware } from "../../middlewares";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Manager } from "../../entities";

export const roomRouter: Router = Router();

roomRouter.post("", validateTokenMiddleware, createRoomController);
