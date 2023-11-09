import { Request, Response } from "express";
import {
  createGuestService,
  deleteGuestService,
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
) => {};

export const updateGuestController = async (
  request: Request,
  response: Response
) => {
  const guestData = request.body;
  const guestId = response.locals.guestId;
  const newGuest = await updateGuestService(guestData!, guestId!);

  return response.status(200).json(newGuest);
};

export const deleteGuestController = async (
  request: Request,
  response: Response
) => {
  await deleteGuestService(request.params.guestId);

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
