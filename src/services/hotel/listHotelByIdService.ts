import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel } from "../../entities";
import { tHotelReturn } from "../../interfaces/hotel/hotel.interface";
import { AppError } from "../../errors";
import { hotelReturnSchema } from "../../schemas/hotel/createHotel.schema";

export const listHotelByIdService = async (
  id: string
): Promise<tHotelReturn> => {
  const hotelRepo: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const findHotel = await hotelRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!findHotel) {
    throw new AppError("Hotel not found", 404);
  }

  return hotelReturnSchema.parse(findHotel);
};
