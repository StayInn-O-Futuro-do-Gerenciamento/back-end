import { Request, Response } from "express";
import { createRoomService } from "../../services";

export const createRoomController = async (req: Request, res: Response) => {
  const newRoom = await createRoomService(req.body);
  return res.status(201).json(newRoom);
};

export const listRoomController = async (req: Request, res: Response) => {};

export const listRoomByIdController = async (req: Request, res: Response) => {};

export const updateRoomController = async (req: Request, res: Response) => {};
