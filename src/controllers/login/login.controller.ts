import { Request, Response } from "express";
import { loginService } from "../../services";
import { tAttendantReqLogin } from "../../interfaces";

export const loginController = async (request: Request, response: Response) => {
  const loginManager: tAttendantReqLogin = request.body;

  const token: object = await loginService(loginManager);

  return response.json(token);
};
