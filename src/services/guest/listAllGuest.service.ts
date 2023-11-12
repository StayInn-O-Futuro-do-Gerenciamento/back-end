import { Repository } from "typeorm";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { guestReturnAllSchema } from "../../schemas";
import { tGuestReturnAllSchema } from "../../interfaces";

export const listAllGuestService = async (
  page: number = 1,
  pageSize: number = 10
): Promise<tGuestReturnAllSchema> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const skip = (page - 1) * pageSize;

  const findGuest: Array<Guest> = await guestRepository.find({
    relations: {
      address: true,
    },
    skip,
    take: pageSize,
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
