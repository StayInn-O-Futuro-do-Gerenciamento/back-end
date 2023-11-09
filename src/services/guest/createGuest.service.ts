import { Repository } from "typeorm";
import {
  tGuestReq,
  tGuestReturn,
} from "../../interfaces/guest/guest.interface";
import { Address, Guest } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnGuestSchema } from "../../schemas";

export const createGuestService = async (
  guestData: tGuestReq
): Promise<tGuestReturn> => {
  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const { address, ...guestRequest } = guestData;

  const newAddress = addressRepository.create(address);

  await addressRepository.save(newAddress);

  const newGuest: Guest = guestRepository.create({
    ...guestRequest,
    address: newAddress,
  });

  await guestRepository.save(newGuest);

  const guest = returnGuestSchema.parse(newGuest);

  return guest;
};
