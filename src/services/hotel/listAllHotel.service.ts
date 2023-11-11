import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel } from "../../entities";
import { hotelReturnAllSchema } from "../../schemas";
import { tHotelAllReturn } from "../../interfaces";

export const listAllHotelService = async (): Promise<tHotelAllReturn> => {
  const hotelRepo: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const findHotel = await hotelRepo.find();

  return hotelReturnAllSchema.parse(findHotel);
};
