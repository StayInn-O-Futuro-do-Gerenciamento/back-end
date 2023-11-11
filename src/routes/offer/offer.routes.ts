import { Router } from "express";
import { createOfferController } from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const offerRouter: Router = Router();

offerRouter.post("", validateTokenMiddleware, createOfferController);
