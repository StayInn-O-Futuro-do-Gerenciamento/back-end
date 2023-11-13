import { Router } from "express";
import {
  createManagerController,
  deleteManagerController,
  updateManagerController,
  listManagerByIdController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares/verify/verifyTokenIsValid";

export const managerRouter: Router = Router();

managerRouter.post("", createManagerController);

managerRouter.patch("/:id", validateTokenMiddleware, updateManagerController);

managerRouter.delete("/:id", deleteManagerController);

managerRouter.get("/:id", validateTokenMiddleware, listManagerByIdController);
