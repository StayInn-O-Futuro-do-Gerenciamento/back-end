import { Repository } from "typeorm";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { guestReturnAllSchema } from "../../schemas";
import { tGuestReturnAllSchema } from "../../interfaces";

export const listAllGuestService = async (): Promise<tGuestReturnAllSchema> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const findGuest: Array<Guest> = await guestRepository.find({
    relations: {
      address: true,
    },
  });

  findGuest.forEach((guest: any) => {
    const contacts: tGuestReturnAllSchema = [];
    guest.emergencyContacts = guest.emergencyContacts.forEach((elem: any) => {
      let obj = JSON.parse(elem);
      contacts.push(obj);
    });

    guest.emergencyContacts = contacts;
  });

  const guests: tGuestReturnAllSchema = guestReturnAllSchema.parse(findGuest);

  return guests;
};
