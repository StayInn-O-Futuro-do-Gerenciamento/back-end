import { Request, Response } from "express";
import {
  createGuestService,
  deleteGuestService,
  listAllGuestService,
  updateGuestService,
} from "../../services";

export const createGuestController = async (
  request: Request,
  response: Response
) => {
  const newGuest = await createGuestService(request.body);

  return response.status(201).json(newGuest);
};

export const getGuestController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const page = parseInt(request.query.page as string, 10) || 1;
  const pageSize = parseInt(request.query.pageSize as string, 10) || 10;

  const listAllGuest = await listAllGuestService(page, pageSize);

  return response.status(200).json(listAllGuest);
};

export const updateGuestController = async (
  request: Request,
  response: Response
) => {
  const guestData = request.body;
  const guestId = request.params.id;
  const newGuest = await updateGuestService(guestData, guestId);

  return response.status(200).json(newGuest);
};

export const deleteGuestController = async (
  request: Request,
  response: Response
) => {
  await deleteGuestService(request.params.id);

  return response.status(204).send();
};


