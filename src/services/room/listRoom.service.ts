import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Room } from "../../entities";

export const listRoomService = async (): Promise<any> => {
  const room: Repository<Room> = AppDataSource.getRepository(Room);

  const findRoom = await room.find({
    relations: {
      typeRoom: true,
    },
  });

  return findRoom;
};
