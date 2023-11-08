import { Router } from "express";
import {
  createManagerController,
  deleteManagerController,
  loginManagerController,
  updateManagerController,
} from "../../controllers";
import { validateTokenMiddleware } from "../../middlewares/verify/verifyTokenIsValid";

export const managerRouter: Router = Router();

managerRouter.post("", createManagerController);

managerRouter.post("/login", loginManagerController);

managerRouter.patch("", validateTokenMiddleware, updateManagerController);

managerRouter.delete("/:id", deleteManagerController);
