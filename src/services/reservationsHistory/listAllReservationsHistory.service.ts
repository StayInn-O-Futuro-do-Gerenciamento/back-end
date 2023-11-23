// import { Repository } from "typeorm";
// import { ReservationsHistory, Guest, Attendant, Room } from "../../entities";
// import { AppDataSource } from "../../data-source";

// export const listAllReservationsHistoryService = async (): Promise<any> => {
//   const reservationsHistoryRepository: Repository<ReservationsHistory> =
//     AppDataSource.getRepository(ReservationsHistory);
//   const attendantRepository: Repository<Attendant> =
//     AppDataSource.getRepository(Attendant);
//   const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);
//   const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

//   const allHistory = await reservationsHistoryRepository.find();
//   const returnAllHistory: any = [];
//   for (const history of allHistory) {
//     const customHistory: any = { ...history };
//     const findRoom = await roomRepository.findOne({
//       where: {
//         id: history.roomID,
//       },
//     });
//     const findAttendant = await attendantRepository.findOne({
//       where: {
//         id: history.attendantId,
//       },
//     });
//     const findGuest = await guestRepository.findOne({
//       where: {
//         id: history.guestId,
//       },
//     });

//     const {
//       guestId: __,
//       attendantId: ___,
//       roomID: _,
//       ...customHistoryResponse
//     } = customHistory;
//     const objectEmergency = findGuest!.emergencyContacts.map((contact: any) => {
//       return JSON.parse(contact);
//     });

//     findGuest!.emergencyContacts = objectEmergency;

//     customHistoryResponse.guest = findGuest;
//     customHistoryResponse.room = findRoom;
//     customHistoryResponse.attendant = findAttendant;

//     returnAllHistory.push(customHistoryResponse);
//   }
//   returnAllHistory.forEach((history: any) => {
//     delete history.attendant.password;
//   });

//   return returnAllHistory;
// };
import { Repository } from "typeorm";
import { ReservationsHistory, Guest, Attendant, Room } from "../../entities";
import { AppDataSource } from "../../data-source";

export const listAllReservationsHistoryService = async (): Promise<any> => {
  const reservationsHistoryRepository: Repository<ReservationsHistory> =
    AppDataSource.getRepository(ReservationsHistory);
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const allHistory = await reservationsHistoryRepository.find();
  const returnAllHistory: any[] = [];

  for (const history of allHistory) {
    const customHistory: any = { ...history };
    const findRoom = await roomRepository.findOne({
      where: {
        id: history.roomID,
      },
      relations: ["typeRoom"],
    });
    const findAttendant = await attendantRepository.findOne({
      where: {
        id: history.attendantId,
      },
    });
    const findGuest = await guestRepository.findOne({
      where: {
        id: history.guestId,
      },
    });

    if (!findRoom || !findAttendant || !findGuest) {
      continue;
    }

    const {
      guestId: __,
      attendantId: ___,
      roomID: _,
      ...customHistoryResponse
    } = customHistory;

    const objectEmergency = findGuest!.emergencyContacts.map((contact: any) => {
      return JSON.parse(contact);
    });

    findGuest!.emergencyContacts = objectEmergency;

    customHistoryResponse.guest = findGuest;
    customHistoryResponse.room = { ...findRoom, typeRoom: findRoom.typeRoom };
    customHistoryResponse.attendant = findAttendant;

    returnAllHistory.push(customHistoryResponse);
  }

  returnAllHistory.forEach((history: any) => {
    delete history.attendant.password;
  });

  return returnAllHistory;
};
