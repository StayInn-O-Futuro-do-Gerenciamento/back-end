import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tRoomRequest, tRoomReturn } from "../../interfaces";
import { Hotel, Room, TypeRoom } from "../../entities";

export const createRoomService = async (
  roomData: tRoomRequest
): Promise<any> => {
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
  const typeRoomRepository: Repository<TypeRoom> =
    AppDataSource.getRepository(TypeRoom);

  const { numberRoom, status, floor } = roomData;
  const { name, description, confort, price, personCount, rate, quantity } =
    roomData.typeRoom;

  const roomType = roomData.typeRoom;
  const newTypeRoom: TypeRoom = typeRoomRepository.create(roomType);
  await typeRoomRepository.save(newTypeRoom);

  const maxRoomNumber = await roomRepository
    .createQueryBuilder()
    .select("MAX(CAST(SUBSTR(roomNumber, 2) AS SIGNED))", "maxRoomNumber")
    .getRawOne();

  let nextRoomNumber = 1;

  if (maxRoomNumber && maxRoomNumber.maxRoomNumber !== null) {
    // Se houver quartos na tabela, use o próximo número após o maior
    nextRoomNumber = maxRoomNumber.maxRoomNumber + 1;
  }
  const maxFloor = await roomRepository
    .createQueryBuilder()
    .select("MAX(CAST(SUBSTR(floor, 6) AS SIGNED))", "maxFloor")
    .getRawOne();

  let nextFloor = 1;

  if (maxFloor && maxFloor.maxFloor !== null) {
    // Se houver andares na tabela, use o próximo andar após o maior
    nextFloor = maxFloor.maxFloor + 1;
  }

  const generatedRooms = [];
  let andar = nextFloor;
  let andarLetter = String.fromCharCode(65 + andar - 1);

  for (let i = 1; i <= quantity; i++) {
    const room = new Room();
    room.roomNumber = `${andarLetter}${nextRoomNumber + i}`;
    room.status = status;
    room.secretKey = generateSecretKey();
    room.floor = `Andar ${andar}`;
    room.typeRoom = newTypeRoom;

    generatedRooms.push(room);

    if (i % 10 === 0) {
      andar++;
      andarLetter = String.fromCharCode(65 + andar - 1);
    }
  }

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
