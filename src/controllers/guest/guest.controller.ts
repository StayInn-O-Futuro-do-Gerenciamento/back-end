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
) => {
  const listAllGuest = await listAllGuestService();

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

export const createAddressController = async (
  request: Request,
  response: Response
) => {};

export const getAddressController = async (
  request: Request,
  response: Response
) => {};

export const updateAddressController = async (
  request: Request,
  response: Response
) => {};

export const deleteAddressController = async (
  request: Request,
  response: Response
) => {};
