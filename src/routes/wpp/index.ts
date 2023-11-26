import { Router } from "express";
import { validateTokenMiddleware } from "../../middlewares";
import { wppConnectController } from "../../controllers";
import { wppListController } from "../../controllers/wpp/wppConnect.controller";

export const wppConnectRouter: Router = Router();

wppConnectRouter.post("", validateTokenMiddleware, wppConnectController);
wppConnectRouter.get("", validateTokenMiddleware, wppListController);
