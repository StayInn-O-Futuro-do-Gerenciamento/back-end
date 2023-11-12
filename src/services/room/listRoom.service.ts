import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Room } from "../../entities";

export const listRoomService = async (
  page: number = 1,
  pageSize: number = 10
): Promise<any> => {
  const room: Repository<Room> = AppDataSource.getRepository(Room);

  const skip = (page - 1) * pageSize;

  const findRoom = await room.find({
    relations: {
      typeRoom: true,
    },
    skip,
    take: pageSize,
    order: {
      roomNumber: "ASC",
    },
  });

  findRoom.sort((a, b) => {
    return compareAlphanumeric(a.roomNumber, b.roomNumber);
  });

  return findRoom;
};

function compareAlphanumeric(a: string, b: string): number {
  const splitAlphaNumeric = (s: string) => s.split(/(\d+)/).filter(Boolean);
  const partsA = splitAlphaNumeric(a);
  const partsB = splitAlphaNumeric(b);

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    if (partsA[i] !== partsB[i]) {
      const numA = parseInt(partsA[i], 10);
      const numB = parseInt(partsB[i], 10);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      } else {
        return partsA[i].localeCompare(partsB[i]);
      }
    }
  }

  return 0;
}
