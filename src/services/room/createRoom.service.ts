import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tReturnArrayRoom, tRoomRequest, tRoomReturn } from "../../interfaces";
import { Hotel, Room, TypeRoom } from "../../entities";

// export const createRoomService = async (
//   roomData: tRoomRequest
// ): Promise<any> => {
//   const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
//   const typeRoomRepository: Repository<TypeRoom> =
//     AppDataSource.getRepository(TypeRoom);

//   const { status } = roomData;
//   const {
//     roomTypeQuantity,
//     name,
//     description,
//     confort,
//     price,
//     personCount,
//     rate,
//   } = roomData.typeRoom;

//   let existingTypeRoom = await typeRoomRepository.findOne({ where: { name } });

//   let newRoom;

//   if (!existingTypeRoom) {
//     const roomType = roomData.typeRoom;
//     const newTypeRoom: TypeRoom = typeRoomRepository.create(roomType);
//     await typeRoomRepository.save(newTypeRoom);
//     newRoom = newTypeRoom;
//   } else {
//     Object.assign(existingTypeRoom, roomData.typeRoom);

//     existingTypeRoom = await typeRoomRepository.save(existingTypeRoom);
//     newRoom = existingTypeRoom;
//   }

//   const maxRoom = await roomRepository
//     .createQueryBuilder("room")
//     .select(
//       "MAX(CAST(SUBSTRING(room.roomNumber FROM POSITION('' IN room.roomNumber) + 1) AS INTEGER))",
//       "maxRoom"
//     )
//     .addSelect(
//       "MAX(CAST(SUBSTRING(room.floor FROM POSITION('' IN room.floor) + 6) AS INTEGER))",
//       "maxFloor"
//     )
//     .getRawOne();

//   let nextRoomNumber = maxRoom.maxRoom || 0;
//   let nextFloor = maxRoom.maxFloor || 0;

//   const generatedRooms = [];
//   let andar = nextFloor + 1;
//   let andarLetter = String.fromCharCode(65 + andar - 1);

//   for (let i = 1; i <= roomTypeQuantity; i++) {
//     const room = new Room();
//     room.roomNumber = `${andarLetter}${nextRoomNumber + i}`;
//     room.status = status;
//     room.secretKey = generateSecretKey();
//     room.floor = `Andar ${andar}`;
//     room.typeRoom = newRoom;

//     generatedRooms.push(room);

//     if ((nextRoomNumber + i) % 10 === 0) {
//       andar++;
//       andarLetter = String.fromCharCode(65 + andar - 1);
//     }
//   }

//   await roomRepository.save(generatedRooms);

//   return generatedRooms;
// };

function generateSecretKey(): string {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?/.,;:'\"-~`[]{}|\\=+]";
  let length = Math.floor(Math.random() * 10) + 10;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
