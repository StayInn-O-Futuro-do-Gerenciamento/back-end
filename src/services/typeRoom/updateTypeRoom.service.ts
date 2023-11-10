import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel, TypeRoom } from "../../entities";
import { tTypeRoomRequest, tTypeRoomReturn } from "../../interfaces";
import { AppError } from "../../errors";
import { returnTypeRoomCreateSchema } from "../../schemas";

export const updateTypeRoomService = async (
  typeRoomData: tTypeRoomRequest,
  typeRoomID: string
): Promise<tTypeRoomReturn> => {
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);
  const hotelRepository: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const oldData = await typeRoomRepository.findOne({
    where: {
      id: typeRoomID,
    },
  });

  if (!oldData) {
    throw new AppError("Type room not found", 404);
  }

  const currentRoomTypeQuantity = oldData.roomTypeQuantity;

  const hotel = await hotelRepository.find({});
  const numberRoomsTotal = hotel[0].numberRoomsTotal;

  const requestedRoomTypeQuantity = typeRoomData.roomTypeQuantity || 0;
  const totalRoomTypeQuantity =
    currentRoomTypeQuantity + requestedRoomTypeQuantity;

  if (totalRoomTypeQuantity > numberRoomsTotal) {
    throw new AppError(
      `A quantidade total de quartos para este tipo excede a capacidade máxima (${numberRoomsTotal}).`
    );
  }

  const newRoom = typeRoomRepository.create({
    ...oldData,
    ...typeRoomData,
  });

  newRoom.price = Number(newRoom.price);

  await typeRoomRepository.save(newRoom);

  const typeRoom = returnTypeRoomCreateSchema.parse(newRoom);

  return typeRoom;
};
