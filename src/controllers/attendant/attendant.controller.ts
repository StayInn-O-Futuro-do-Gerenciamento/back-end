import { Request, Response } from "express";
import {
  createAttendantService,
  deleteAttendantService,
  updateAttendantService,
} from "../../services";

export const createAttendantController = async (
  request: Request,
  response: Response
) => {
  const managerId = response.locals.userId;
  const attedantNew = await createAttendantService(request.body, managerId);

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
) => {
  await deleteAttendantService(request.params.id);

  return response.status(204).send();
};
