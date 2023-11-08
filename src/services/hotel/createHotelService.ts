import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel, Manager } from "../../entities";
import { tHotelCreate } from "../../interfaces/hotel/hotel.interface";
import { hotelCreateSchema } from "../../schemas/hotel/createHotel.schema";
import { AppError } from "../../errors";

export const createHotelService = async (
  hotelData: tHotelCreate,
  userId: string
): Promise<any> => {
  const hotelRepository: Repository<Hotel> = AppDataSource.getRepository(Hotel);
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  // Arrumar isso aqui - Ideia: Criar um middleware que salva as info do user direto em um RES
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

  return hotelCreateSchema.parse(hotelCreate);
};
