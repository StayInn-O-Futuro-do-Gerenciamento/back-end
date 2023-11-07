import { Request, Response } from "express";
import { loginAttendantService } from "../../services";
import { tAttendantReqLogin } from "../../interfaces";

export const loginAttendantController = async (
  request: Request,
  response: Response
) => {
  const loginManager: tAttendantReqLogin = request.body;

  const token: object = await loginAttendantService(loginManager);

  return response.json(token);
};
