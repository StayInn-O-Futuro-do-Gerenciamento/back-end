import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  Reservations,
  Attendant,
  Guest,
  Room,
  ReservationsHistory,
} from "../../entities";
import { tReservationReq } from "../../interfaces";


export const createReservationService = async (
  reservationData: tReservationReq,
  attendantId: string
): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const reservationsHistoryRepository: Repository<ReservationsHistory> =
    AppDataSource.getRepository(ReservationsHistory);

  const {
    room: roomId,
    guest: guestId,
    ...reservationRequest
  } = reservationData;

  const findRoom = await roomRepository.findOne({
    where: {
      id: roomId,
    },
    relations: {
      typeRoom: true,
    },
  });

  const findGuest = await guestRepository.findOne({
    where: {
      id: guestId,
    },
    relations: {
      address: true,
    },
  });

  const findAttendant = await attendantRepository.findOne({
    where: {
      id: attendantId,
    },
  });

  findRoom!.status = "Ocupado";

  roomRepository.save(findRoom!);

  const newReservation = reservationsRepository.create({
    ...reservationRequest,
    rooms: findRoom!,
    attendant: findAttendant!,
    guests: [findGuest!],
  } as DeepPartial<Reservations>);

  await reservationsRepository.save(newReservation);

  const history = reservationsHistoryRepository.create({
    checkin: newReservation.checkin,
    checkout: newReservation.checkout,
    id_guest: findGuest!.id,
    id_room: findRoom!.id,
    id_reservation: newReservation.id,
  });
  await reservationsHistoryRepository.save(history);

  const responseReservation: any = { ...newReservation };
  delete responseReservation.attendant.password;
  const emergencyContacts = responseReservation.guests[0].emergencyContacts;
  const objectEmergency = emergencyContacts.map((contact: any) => {
    return JSON.parse(contact);
  });
  responseReservation.guests[0].emergencyContacts = objectEmergency;

  return responseReservation;
};
