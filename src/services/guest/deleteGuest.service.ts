import { Repository } from "typeorm";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const deleteGuestService = async (guestId: string) => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const guest = await guestRepository.findOne({
    where: {
      id: guestId,
    },
  });

  if (!guest) {
    throw new AppError("Guest not found!", 404);
  }

  await guestRepository.delete({ id: guestId });
};
