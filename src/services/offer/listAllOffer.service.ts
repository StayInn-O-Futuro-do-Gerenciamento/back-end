import { Repository } from "typeorm";
import { Offer } from "../../entities";
import { AppDataSource } from "../../data-source";

export const listAllOfferService = async (): Promise<any> => {
  const offerRepository: Repository<Offer> = AppDataSource.getRepository(Offer);

  const allOffer = await offerRepository.find({
    relations: {
      typeRoom: true,
    },
  });

  return allOffer;
};
