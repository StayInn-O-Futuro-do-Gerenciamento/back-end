import { Request, Response } from "express";
import { createGuestService } from "../../services";

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
) => {};

export const deleteGuestController = async (
  request: Request,
  response: Response
) => {};

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
