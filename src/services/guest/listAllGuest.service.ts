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

  console.log(findGuest);

  const context: any[] = [];

  findGuest.forEach((guest: any) => {
    guest.emergencyContacts = guest.emergencyContacts.forEach((elem: any) => {
      context.push(elem);
      console.log(elem);
    });

    guest.emergencyContacts = context;
  });

  console.log(findGuest);

  const guests: tGuestReturnAllSchema = guestReturnAllSchema.parse(findGuest);

  return guests;
};
