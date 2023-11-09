import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel } from "../../entities";
import { tHotelAllReturn } from "../../interfaces/hotel/hotel.interface";
import { hotelReturnAllSchema } from "../../schemas/hotel/createHotel.schema";

export const listAllHotelService = async (): Promise<tHotelAllReturn> => {
  const hotelRepo: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const findHotel = await hotelRepo.find();

  return hotelReturnAllSchema.parse(findHotel);
};
