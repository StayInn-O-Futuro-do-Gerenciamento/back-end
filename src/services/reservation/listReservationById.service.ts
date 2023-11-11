import { Repository } from "typeorm";
import { Reservations } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const listReservationByIdService = async (id: string): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const findReservation = await reservationsRepository.findOne({
    where: {
      id,
    },
    relations: {
      attendant: true,
      rooms: true,
      guests: true,
    },
  });

  if (!findReservation) {
    throw new AppError("Reservation not found", 404);
  }

  const responseReservation: any = { ...findReservation };
  const contacts: any = [];
  responseReservation.guests[0].emergencyContacts.forEach((elem: any) => {
    let obj = JSON.parse(elem);
    contacts.push(obj);
  });
  delete responseReservation.attendant.password;
  responseReservation.guests[0].emergencyContacts = contacts;

  return responseReservation;
};
