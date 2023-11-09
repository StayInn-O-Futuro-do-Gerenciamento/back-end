import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Hotel } from "../../entities";
import { AppError } from "../../errors";

export const deleteHotelService = async (id: string): Promise<void> => {
  const hotelRepo: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const findHotel = await hotelRepo.findOne({
    where: {
      id: id,
    },
  });
  if (!findHotel) {
    throw new AppError("Hotel not found", 404);
  }

  await hotelRepo.delete({ id: id });
};
