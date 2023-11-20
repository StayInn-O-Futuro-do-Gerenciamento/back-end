import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TypeRoom } from "../../entities";

export const listTypeRoomService = async (): Promise<any> => {
  const typeRoom: Repository<TypeRoom> = AppDataSource.getRepository(TypeRoom);

  const findTypeRoom = await typeRoom.find({
    relations: {
      offer: true,
      rooms: true,
    },
  });

  return findTypeRoom;
};
