import { Request, Response } from "express";
import { createOfferService } from "../../services";

export const createOfferController = async (req: Request, res: Response) => {
  const newOffer = await createOfferService(req.body);

  return res.status(201).json(newOffer);
};

export const listOfferController = async (req: Request, res: Response) => {};

export const listOfferByIdController = async (
  req: Request,
  res: Response
) => {};

export const updateOfferController = async (req: Request, res: Response) => {};

export const deleteOfferController = async (req: Request, res: Response) => {};
