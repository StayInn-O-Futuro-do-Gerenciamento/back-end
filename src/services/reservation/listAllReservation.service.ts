import { Repository } from "typeorm";
import { Reservations } from "../../entities";
import { AppDataSource } from "../../data-source";

export const listAllReservatonsService = async (): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const allReservations: Array<Reservations> =
    await reservationsRepository.find({
      relations: {
        guests: true,
        rooms: {
          typeRoom: true,
        },
        attendant: true,
      },
    });

  allReservations.forEach((reservations: any) => {
    const contacts: any = [];
    reservations.guests[0].emergencyContacts.forEach((elem: any) => {
      let obj = JSON.parse(elem);
      contacts.push(obj);
    });
    delete reservations.attendant.password;
    reservations.guests[0].emergencyContacts = contacts;
  });

  return allReservations;
};
