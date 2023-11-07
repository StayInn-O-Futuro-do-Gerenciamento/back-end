import { Request, Response } from "express";
import { tManagerRequest } from "../../interfaces";
import { loginManagerService } from "../../services";

export const loginManagerController = async (
  request: Request,
  response: Response
) => {
  const loginManager: tManagerRequest = request.body;

  const token: object = await loginManagerService(loginManager);

  return response.json(token);
};
