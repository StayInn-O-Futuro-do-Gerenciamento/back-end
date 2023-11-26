import { Request, Response } from "express";
import { wppConnectService } from "../../services/wpp/wppConnect.service";
import { WppListService } from "../../services/wpp/wppList.service";

export const wppConnectController = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1]!;
  const userId = res.locals.userId;
  const apiKey = process.env.API_KEY_WPP!;

  const response = await wppConnectService(token, userId, apiKey);

  return res.status(202).json(response);
};

export const wppListController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const response = await WppListService(userId);

  return res.status(202).json(response);
};
