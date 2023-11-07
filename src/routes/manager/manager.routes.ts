import { Router } from "express";
import {
  createManagerController,
  deleteManagerController,
  loginManagerController,
  updateManagerController,
} from "../../controllers";

export const managerRouter: Router = Router();

managerRouter.post("", createManagerController);

managerRouter.post("/login", loginManagerController);

managerRouter.patch("", updateManagerController);

managerRouter.delete("", deleteManagerController);
