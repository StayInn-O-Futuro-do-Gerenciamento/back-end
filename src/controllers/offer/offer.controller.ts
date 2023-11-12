import { Request, Response } from "express";
import {
  createOfferService,
  deleteOfferService,
  listAllOfferService,
  updateOfferService,
} from "../../services";

export const createOfferController = async (req: Request, res: Response) => {
  const newOffer = await createOfferService(req.body);

  return res.status(201).json(newOffer);
};

export const listOfferController = async (req: Request, res: Response) => {
  const allOffer = await listAllOfferService();

  return res.status(200).json(allOffer);
};

export const updateOfferController = async (req: Request, res: Response) => {
  const offer = await updateOfferService(req.body, req.params.id);

  return res.status(200).json(offer);
};

export const deleteOfferController = async (req: Request, res: Response) => {
  await deleteOfferService(req.params.id);

  return res.status(204).send();
};
