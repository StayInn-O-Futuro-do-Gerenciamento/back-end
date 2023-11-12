import { Router } from "express";
import {
  createOfferController,
  deleteOfferController,
  listOfferController,
  updateOfferController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares";

export const offerRouter: Router = Router();

offerRouter.post("", validateTokenMiddleware, createOfferController);
offerRouter.patch("/:id", validateTokenMiddleware, updateOfferController);
offerRouter.get("", validateTokenMiddleware, listOfferController);
offerRouter.delete("/:id", validateTokenMiddleware, deleteOfferController);
