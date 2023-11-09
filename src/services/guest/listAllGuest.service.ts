import { Repository } from "typeorm";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { guestReturnAllSchema } from "../../schemas";
import { tGuestReturnAllSchema } from "../../interfaces";

export const listAllGuestService = async (): Promise<tGuestReturnAllSchema> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const findGuest = await guestRepository.find();

  console.log(findGuest);

  return guestReturnAllSchema.parse(findGuest);
};
