import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tReturnArrayRoom, tRoomRequest, tRoomReturn } from "../../interfaces";
import { Hotel, Room, TypeRoom } from "../../entities";
import { AppError } from "../../errors";

let roomsPerFloor;
let lastRoomNumber = 0;
let lastFloor = 0;

export const createRoomService = async (
  roomData: tRoomRequest
): Promise<any> => {
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);
  const hotelRepository: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const hotel = await hotelRepository.find({});
  roomsPerFloor = hotel[0].roomsPerFloor;
  const numberRoomsTotal = hotel[0].numberRoomsTotal;

  const roomsCount = await roomRepository.count();

  if (roomsCount === 0) {
    lastRoomNumber = 0;
    lastFloor = 0;
  }

  const { status } = roomData;
  const {
    roomTypeQuantity,
    name,
    description,
    confort,
    price,
    personCount,
    rate,
  } = roomData.typeRoom;

  let existingTypeRoom = await typeRoomRepository.findOne({ where: { name } });
  let findRooms = await typeRoomRepository.find();

  let roomsQuantityTotal = findRooms.reduce(
    (accumulator, currentValue) => accumulator + currentValue.roomTypeQuantity,
    0
  );

  let newRoom;

  if (roomsQuantityTotal + roomTypeQuantity > numberRoomsTotal) {
    throw new AppError(
      `A capacidade máxima de quartos (${numberRoomsTotal}) foi atingida. Restam ${
        numberRoomsTotal - roomsQuantityTotal
      } quartos disponíveis.`
    );
  }

  if (!existingTypeRoom) {
    const roomType = roomData.typeRoom;
    const newTypeRoom: TypeRoom = typeRoomRepository.create(roomType);
    await typeRoomRepository.save(newTypeRoom);
    newRoom = newTypeRoom;
  } else {
    Object.assign(existingTypeRoom, roomData.typeRoom, {
      roomTypeQuantity: (existingTypeRoom.roomTypeQuantity += roomTypeQuantity),
    });

    existingTypeRoom = await typeRoomRepository.save(existingTypeRoom);
    newRoom = existingTypeRoom;
  }

  const generatedRooms = [];
  let andar = lastFloor + 1;
  let andarLetter = String.fromCharCode(65 + andar - 1);

  for (let i = 1; i <= roomTypeQuantity; i++) {
    if (roomsCount + i > numberRoomsTotal) {
      throw new AppError(
        `A capacidade máxima de quartos (${numberRoomsTotal}) foi atingida. Restam ${
          numberRoomsTotal - roomsCount
        } quartos disponíveis.`
      );
    }

    const room = new Room();
    room.roomNumber = `${andarLetter}${lastRoomNumber + i}`;
    room.status = status;
    room.secretKey = generateSecretKey();
    room.floor = `Andar ${andar}`;
    room.typeRoom = newRoom;
    room.hotel = hotel[0];

    generatedRooms.push(room);

    if ((lastRoomNumber + i) % roomsPerFloor === 0) {
      andar++;
      andarLetter = String.fromCharCode(65 + andar - 1);
      lastFloor = andar - 1;
    }
  }

  lastRoomNumber += roomTypeQuantity;

  await roomRepository.save(generatedRooms);

  return generatedRooms;
};

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
