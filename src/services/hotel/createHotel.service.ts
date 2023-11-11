import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel, Manager } from "../../entities";
import { AppError } from "../../errors";
import { hotelReturnSchema } from "../../schemas";
import { tHotelCreate, tHotelReturn } from "../../interfaces";

export const createHotelService = async (
  hotelData: tHotelCreate,
  userId: string
): Promise<tHotelReturn> => {
  const hotelRepository: Repository<Hotel> = AppDataSource.getRepository(Hotel);
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const manager = await managerRepository.findOneBy({
    id: userId,
  });

  const alreadyHotel = await hotelRepository.findOneBy({
    manager: !manager,
  });

  if (alreadyHotel) {
    throw new AppError("Only 1 hotel by account", 409);
  }

  const hotelCreate = hotelRepository.create(hotelData);
  if (manager) {
    hotelCreate.manager = manager;
  }

  await hotelRepository.save(hotelCreate);

  return hotelReturnSchema.parse(hotelCreate);
};
