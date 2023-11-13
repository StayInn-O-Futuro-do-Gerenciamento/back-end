import { Request, Response } from "express";
import {
  createManagerService,
  deleteManagerService,
  listManagerByIdService,
  updateManagerService,
} from "../../services";

export const createManagerController = async (
  request: Request,
  response: Response
) => {
  const newManager = await createManagerService(request.body);
  return response.status(201).json(newManager);
};

export const updateManagerController = async (
  request: Request,
  response: Response
) => {
  const managerData = request.body;
  const managerId = request.params.id;
  const newManager = await updateManagerService(managerData, managerId);

  return response.status(200).json(newManager);
};

export const deleteManagerController = async (
  request: Request,
  response: Response
) => {
  await deleteManagerService(request.params.id);

  return response.status(204).send();
};

export const listManagerByIdController = async (
  request: Request,
  response: Response
) => {
  console.log(request.params.id);
  const listManagerById = await listManagerByIdService(request.params.id);

  return response.status(200).json(listManagerById);
};
