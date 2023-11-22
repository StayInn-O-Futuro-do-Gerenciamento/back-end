import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  tReturnUpdateTypeRoom,
  tUpdateTypeRoomRequest,
} from "../../interfaces";
import { Room } from "../../entities";
import { AppError } from "../../errors";
import { returnUpdateStatusRoomRequest } from "../../schemas";

export const updateRoomService = async (
  roomData: tUpdateTypeRoomRequest,
  roomID: string
): Promise<tReturnUpdateTypeRoom> => {
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const oldData = await roomRepository.findOne({
    where: {
      id: roomID,
    },
  });

  if (!oldData) {
    throw new AppError("room not found", 404);
  }

  const newRoom = roomRepository.create({
    ...oldData,
    status: roomData.status,
    available: roomData.available,
  });

  await roomRepository.save(newRoom);

  const room = returnUpdateStatusRoomRequest.parse(newRoom);

  return room;
};
