import { Request, Response } from "express";
import {
  createRoomService,
  listRoomService,
  updateRoomService,
} from "../../services";

export const createRoomController = async (req: Request, res: Response) => {
  const newRoom = await createRoomService(req.body);
  return res.status(201).json(newRoom);
};

export const listRoomController = async (req: Request, res: Response) => {
  const rooms = await listRoomService();
  return res.status(200).json(rooms);
};

export const listRoomByIdController = async (req: Request, res: Response) => {};

export const updateRoomController = async (req: Request, res: Response) => {
  const roomUpdated = await updateRoomService(req.body, req.params.id);

  return res.status(200).json(roomUpdated);
};
