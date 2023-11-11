import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Reservations } from "../../entities";
import { tReservationUpdateReq } from "../../interfaces";
import { reservationUpdateSchemaReturn } from "../../schemas";
import { AppError } from "../../errors";

export const updateReservationService = async (
  reservationData: tReservationUpdateReq,
  reservationId: string
): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const findReservation = await reservationsRepository.findOne({
    where: {
      id: reservationId,
    },
  });

  if (!findReservation) {
    throw new AppError("Reservation not found", 404);
  }
  console.log(findReservation);

  Object.assign(findReservation, reservationData);

  await reservationsRepository.save(findReservation);

  console.log(findReservation);

  const reservation = reservationUpdateSchemaReturn.parse(findReservation);

  return reservation;
};
