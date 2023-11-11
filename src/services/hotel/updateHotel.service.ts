import { object } from "zod";
import { AppDataSource } from "../../data-source";
import { Hotel } from "../../entities";
import { AppError } from "../../errors";

import { Repository } from "typeorm";
import { hotelReturnSchema } from "../../schemas";
import { tHotelReturn, tHotelUpdate } from "../../interfaces";

export const updateHotelService = async (
  data: tHotelUpdate,
  hotelId: string
): Promise<tHotelReturn> => {
  const hotelRepo: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const findHotel = await hotelRepo.findOne({
    where: {
      id: hotelId,
    },
  });
  if (!findHotel) {
    throw new AppError("Hotel not found");
  }

  Object.assign(findHotel, data);

  await hotelRepo.save(findHotel);

  return hotelReturnSchema.parse(findHotel);
};
