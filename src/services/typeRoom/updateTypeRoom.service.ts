import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TypeRoom } from "../../entities";
import { tTypeRoomRequest, tTypeRoomReturn } from "../../interfaces";
import { AppError } from "../../errors";
import { returnTypeRoomCreateSchema } from "../../schemas";

export const updateTypeRoomService = async (
  typeRoomData: tTypeRoomRequest,
  typeRoomID: string
): Promise<tTypeRoomReturn> => {
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);

  const oldData = await typeRoomRepository.findOne({
    where: {
      id: typeRoomID,
    },
  });

  if (!oldData) {
    throw new AppError("type room not found", 404);
  }

  const newRoom = typeRoomRepository.create({
    ...oldData,
    ...typeRoomData,
  });

  await typeRoomRepository.save(newRoom);

  const typeRoom = returnTypeRoomCreateSchema.parse(oldData);

  return typeRoom;
};
