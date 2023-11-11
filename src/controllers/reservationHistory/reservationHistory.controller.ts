import { Request, Response } from "express";
import {
  listAllReservationsHistoryService,
  listReservationsHistoryByFilterService,
} from "../../services";

export const listReservationsHistoryController = async (
  req: Request,
  res: Response
) => {
  const allReservationsHistory = await listAllReservationsHistoryService();

  return res.status(200).json(allReservationsHistory);
};

export const listReservationsHistoryControllerBYFilter = async (
  req: Request,
  res: Response
) => {
  const reservations = await listReservationsHistoryByFilterService(
    req.params.filter,
    req.params.value
  );

  return res.status(200).json(reservations);
};
