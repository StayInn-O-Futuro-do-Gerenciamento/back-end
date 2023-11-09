import { Request, Response } from "express";
import { createHotelService } from "../../services/hotel/createHotelService";
import { updateHotelService } from "../../services/hotel/updateHotelService";
import { listHotelByIdService } from "../../services/hotel/listHotelByIdService";
import { listAllHotelService } from "../../services/hotel/listAllHotelService";
import { deleteHotelService } from "../../services/hotel/deleteHotelService";

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
) => {
  const updateHotel = await updateHotelService(request.body, request.params.id);

  return response.status(200).json(updateHotel);
};

export const listHotelByIdController = async (
  request: Request,
  response: Response
) => {
  const listHotelById = await listHotelByIdService(request.params.id);

  return response.status(200).json(listHotelById);
};

export const listHotelController = async (
  request: Request,
  response: Response
) => {
  const listAllHotel = await listAllHotelService();

  return response.status(200).json(listAllHotel);
};

export const deleteHotelController = async (
  request: Request,
  response: Response
) => {
  await deleteHotelService(request.params.id);

  return response.status(204).json();
};
