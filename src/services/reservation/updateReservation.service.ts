import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Reservations, ReservationsHistory } from "../../entities";
import { tReservationUpdateReq } from "../../interfaces";
import { reservationUpdateSchemaReturn } from "../../schemas";
import { AppError } from "../../errors";

export const updateReservationService = async (
  reservationData: tReservationUpdateReq,
  reservationId: string
): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const reservationsHistoryRepository: Repository<ReservationsHistory> =
    AppDataSource.getRepository(ReservationsHistory);

  const findReservation = await reservationsRepository.findOne({
    where: {
      id: reservationId,
    },
  });

  if (!findReservation) {
    throw new AppError("Reservation not found", 404);
  }

  const findHistoryReservation = await reservationsHistoryRepository.findOne({
    where: {
      checkin: findReservation.checkin,
      checkout: findReservation.checkout,
    },
  });

  Object.assign(findReservation, reservationData);

  await reservationsRepository.save(findReservation);

  Object.assign(findHistoryReservation!, findReservation, {
    guestId: findHistoryReservation!.guestId,
    roomID: findHistoryReservation!.roomID,
    attendantId: findHistoryReservation!.attendantId,
  });

  await reservationsHistoryRepository.save(findHistoryReservation!);

  const reservation = reservationUpdateSchemaReturn.parse(findReservation);

  return reservation;
};
