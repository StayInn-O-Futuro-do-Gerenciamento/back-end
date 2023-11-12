import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Offer, TypeRoom } from "../../entities";
import { AppError } from "../../errors";

export const deleteOfferService = async (id: string) => {
  const offerRepository: Repository<Offer> = AppDataSource.getRepository(Offer);
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);

  const offer = await offerRepository.findOne({
    where: { id: id },
    relations: {
      typeRoom: true,
    },
  });

  if (!offer) {
    throw new AppError("Attendant not exist!", 404);
  }

  const allTypes = await typeRoomRepository.find({
    relations: {
      offer: true,
    },
  });
  const typesOffer: any = [];

  allTypes.forEach((types: any) => {
    if (types.offer.id == offer.id) {
      typesOffer.push(types);
    }
  });

  for (const types of typesOffer) {
    types.offer = null;
    await typeRoomRepository.save(types);
  }

  await offerRepository.delete({ id: id });
};
