import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Offer, TypeRoom } from "../../entities";
import { tOfferReq, tOfferReturn } from "../../interfaces";
import { AppError } from "../../errors";
import { offerReturnSchema } from "../../schemas";

export const createOfferService = async (
  offerData: tOfferReq
): Promise<tOfferReturn> => {
  const offerRepository: Repository<Offer> = AppDataSource.getRepository(Offer);

  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);

  const { typeRoom: typeRoomId, ...offerRequest } = offerData;

  const findTypeRoom = await typeRoomRepository.findOne({
    where: {
      id: typeRoomId,
    },
  });

  const findOffer = await offerRepository.findOne({
    where: {
      offerName: offerRequest.offerName,
    },
  });

  if (!findTypeRoom) {
    throw new AppError("TypeRoom not found", 404);
  }
  if (findOffer) {
    findTypeRoom.offer = findOffer;
    findTypeRoom.offer.discount = Number(findTypeRoom.offer.discount);

    await typeRoomRepository.save(findTypeRoom);

    const offer = offerReturnSchema.parse(findOffer);

    return offer;
  }
  const newOffer = offerRepository.create({
    ...offerRequest,
    typeRoom: findTypeRoom,
  });

  await offerRepository.save(newOffer);

  findTypeRoom.offer = newOffer;

  await typeRoomRepository.save(findTypeRoom);

  const offer = offerReturnSchema.parse(newOffer);

  return offer;
};
