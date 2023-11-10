import { Request, Response } from "express";
import { listTypeRoomService, updateTypeRoomService } from "../../services";

export const createTypeRoomController = async (
  req: Request,
  res: Response
) => {};

export const listTypeRoomController = async (req: Request, res: Response) => {
  const typeRooms = await listTypeRoomService();
  return res.status(200).json(typeRooms);
};

export const updateTypeRoomController = async (req: Request, res: Response) => {
  const typeRoomUpdated = await updateTypeRoomService(req.body, req.params.id);

  return res.status(200).json(typeRoomUpdated);
};
