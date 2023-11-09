import { Repository } from "typeorm";
import {
  tGuestUpdate,
  tGuestUpdateReq,
} from "../../interfaces/guest/guest.interface";
import { Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnGuestSchema } from "../../schemas";

export const updateGuestService = async (
  guestData: tGuestUpdateReq,
  updateId: string
): Promise<tGuestUpdate> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const oldData = await guestRepository.findOneBy({
    id: updateId,
  });

  const guest = guestRepository.create({
    ...oldData,
    name: guestData.name || oldData!.name,
    rg: guestData.rg || oldData!.rg,
    cpf: guestData.cpf || oldData!.cpf,
    nationality: guestData.nationality || oldData!.nationality,
    phoneNumbers: guestData.phoneNumbers || oldData!.phoneNumbers,
    emergencyContacts:
      guestData.emergencyContacts || oldData!.emergencyContacts,
    address: guestData.address || oldData!.address,
  });

  await guestRepository.save(guest);

  const newGuest = returnGuestSchema.parse(guest);

  return newGuest;
};
