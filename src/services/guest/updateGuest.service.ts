import { Repository } from "typeorm";
import {
  tGuestUpdate,
  tGuestUpdateReq,
} from "../../interfaces/guest/guest.interface";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnGuestSchema } from "../../schemas";
import { AppError } from "../../errors";

export const updateGuestService = async (
  guestData: tGuestUpdateReq,
  updateId: string
): Promise<tGuestUpdate> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const oldData = await guestRepository.findOne({
    where: {
      id: updateId,
    },
    relations: {
      address: true,
    },
  });

  if (!oldData) {
    throw new AppError("Guest not found", 404);
  }

  Object.assign(oldData, guestData, {
    address: { ...oldData.address },
  });

  oldData.passport = Number(oldData.passport);
  oldData.cpf = Number(oldData.cpf);
  oldData.rg = Number(oldData.rg);

  console.log(oldData);

  await guestRepository.save(oldData);

  const newGuest = returnGuestSchema.parse(oldData);

  return newGuest;
};
