import { Request, Response } from "express";
import {
  createReservationService,
  updateReservationService,
} from "../../services";

export const createReservationController = async (
  req: Request,
  res: Response
) => {
  const attendantId = res.locals.userId;

  const reservation = await createReservationService(req.body, attendantId);

  return res.status(201).json(reservation);
};

export const listReservationController = async (
  req: Request,
  res: Response
) => {};

export const listReservationByIdController = async (
  req: Request,
  res: Response
) => {};

export const updateReservationController = async (
  req: Request,
  res: Response
) => {
  const reservation = await updateReservationService(req.body, req.params.id);

  return res.status(200).json(reservation);
};

export const deleteReservationController = async (
  req: Request,
  res: Response
) => {};
