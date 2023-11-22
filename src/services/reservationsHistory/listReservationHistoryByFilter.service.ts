import { Repository } from "typeorm";
import { ReservationsHistory, Guest, Attendant, Room } from "../../entities";
import { AppDataSource } from "../../data-source";

export const listReservationsHistoryByFilterService = async (
  filter: string,
  value: string
): Promise<any> => {
  const reservationsHistoryRepository: Repository<ReservationsHistory> =
    AppDataSource.getRepository(ReservationsHistory);
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const allHistory = await reservationsHistoryRepository.find();
  const returnAllHistory: any = [];
  for (const history of allHistory) {
    const customHistory: any = { ...history };
    const findRoom = await roomRepository.findOne({
      where: {
        id: history.roomID,
      },
      relations: {
        typeRoom: true,
      },
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
    customHistoryResponse.room = findRoom;
    customHistoryResponse.attendant = findAttendant;

    returnAllHistory.push(customHistoryResponse);
  }

  let filteredReservations: any[] = [];

  if (filter === "guest") {
    filteredReservations = returnAllHistory.filter((history: any) => {
      return history.guest.id === value;
    });
  } else if (filter === "attendant") {
    filteredReservations = returnAllHistory.filter((history: any) => {
      return history.attendant.id === value;
    });
  } else if (filter === "room") {
    filteredReservations = returnAllHistory.filter((history: any) => {
      return history.room.id === value;
    });
  }

  return filteredReservations;
};
