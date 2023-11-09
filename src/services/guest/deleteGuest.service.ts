import { Repository } from "typeorm";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const deleteGuestService = async (guestId: string) => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const guest = await guestRepository.findOneBy({ id: guestId });

  if (!guest) {
    throw new AppError("Guest not exist!", 404);
  }

  await guestRepository.delete({ id: guestId });
};
