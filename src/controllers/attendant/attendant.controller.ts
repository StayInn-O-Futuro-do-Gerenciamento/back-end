import { Request, Response } from "express";
import { createAttendantService } from "../../services/attendant/createAttendant.service";
import { updateAttendantService } from "../../services/attendant/updateAttendant.service";

export const createAttendantController = async (
  request: Request,
  response: Response
) => {
  const attedantNew = await createAttendantService(request.body);

  return response.json(attedantNew).status(201);
};

export const updateAttendantController = async (
  request: Request,
  response: Response
) => {
  const attedantUpdated = await updateAttendantService(
    request.body,
    request.params.id
  );

  return response.json(attedantUpdated).status(200);
};

export const deleteAttendantController = async (
  request: Request,
  response: Response
) => {};
