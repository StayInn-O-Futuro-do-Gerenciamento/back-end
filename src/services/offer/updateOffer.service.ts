import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Offer, TypeRoom } from "../../entities";
import { AppError } from "../../errors";
import { tOfferReqUpdate, tOfferReturn } from "../../interfaces";
import { offerReturnSchema } from "../../schemas";

export const updateOfferService = async (
  offerData: tOfferReqUpdate,
  offerId: string
): Promise<tOfferReturn> => {
  const offerRepository: Repository<Offer> = AppDataSource.getRepository(Offer);

  const findOffer = await offerRepository.findOne({
    where: {
      id: offerId,
    },
  });

  if (!findOffer) {
    throw new AppError("Offer not found", 404);
  }
  Object.assign(findOffer, offerData);

  await offerRepository.save(findOffer);

  const offer = offerReturnSchema.parse(findOffer);

  return offer;
};
