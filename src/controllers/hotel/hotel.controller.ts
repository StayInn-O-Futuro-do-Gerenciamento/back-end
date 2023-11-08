import { Request, Response } from "express";
import { createHotelService } from "../../services/hotel/createHotelService";

export const createHotelController = async (
  request: Request,
  response: Response
) => {
  const hotelCreate = await createHotelService(
    request.body,
    response.locals.userId
  );

  return response.status(201).json(hotelCreate);
};

export const updateHotelController = async (
  request: Request,
  response: Response
) => {};

export const listHotelController = async (
  request: Request,
  response: Response
) => {};
