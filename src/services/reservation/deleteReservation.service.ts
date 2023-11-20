import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Reservations, Room } from "../../entities";
import { AppError } from "../../errors";

export const deleteReservationService = async (id: string) => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);
  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const reservation = await reservationsRepository.findOne({
    where: { id: id },
    relations: {
      rooms: true,
    },
  });

  if (!reservation) {
    throw new AppError("Attendant not exist!", 404);
  }

  const room = await roomRepository.findOne({
    where: {
      id: reservation.rooms.id,
    },
  });

  room!.available = true;
  room!.status = "Sujo";

  await roomRepository.save(room!);

  await reservationsRepository.delete({ id: id });
};
