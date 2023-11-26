import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Offer, TypeRoom } from "../../entities";
import { AppError } from "../../errors";
import { tOfferReqUpdate, tOfferReturn } from "../../interfaces";
import { offerReturnSchema } from "../../schemas";

export const updateOfferService = async (
  offerData: tOfferReqUpdate,
  offerId: string
): Promise<any> => {
  const offerRepository: Repository<Offer> = AppDataSource.getRepository(Offer);
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);

  const findOffer = await offerRepository.findOne({
    where: {
      id: offerId,
    },
  });

  if (!findOffer) {
    throw new AppError("Offer not found", 404);
  }

  if (offerData.typeRoom) {
    const findTypeRoom = await typeRoomRepository.findOne({
      where: {
        id: offerData.typeRoom,
      },
    });
    if (!findTypeRoom) {
      throw new AppError("Type Room not found", 404);
    }

    findOffer.discount = Number(findOffer.discount);
    const { typeRoom: types, ...offerNew } = offerData;
    Object.assign(findOffer, offerNew);
    const newOffer = offerRepository.create({
      ...findOffer,
      typeRoom: findTypeRoom,
    });
    await offerRepository.save(newOffer);

    findTypeRoom.offer = newOffer;
    await typeRoomRepository.save(findTypeRoom);

    return findOffer;
  } else {
    findOffer.discount = Number(findOffer.discount);
    Object.assign(findOffer, offerData);
    await offerRepository.save(findOffer);

    return findOffer;
  }
};
