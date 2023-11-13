import {
  createAttendantController,
  deleteAttendantController,
  listAttendantByIdController,
  updateAttendantController,
} from "./attendant/attendant.controller";
import { loginAttendantController } from "./attendant/loginAttendant.controller";
import {
  createGuestController,
  deleteGuestController,
  getGuestController,
  updateGuestController,
} from "./guest/guest.controller";
import {
  createHotelController,
  listHotelController,
  updateHotelController,
} from "./hotel/hotel.controller";
import { loginController } from "./login/login.controller";
import { loginManagerController } from "./manager/loginManager.controller";
import {
  createManagerController,
  deleteManagerController,
  listManagerByIdController,
  updateManagerController,
} from "./manager/manager.controller";
import {
  createOfferController,
  deleteOfferController,
  listOfferController,
  updateOfferController,
} from "./offer/offer.controller";
import {
  listReservationsHistoryController,
  listReservationsHistoryControllerBYFilter,
} from "./reservationHistory/reservationHistory.controller";
import {
  createReservationController,
  deleteReservationController,
  listReservationByIdController,
  listReservationController,
  updateReservationController,
} from "./reservations/reservations.controller";

import {
  listRoomController,
  createRoomController,
  listRoomByIdController,
  updateRoomController,
} from "./room/room.controller";
import {
  createTypeRoomController,
  listTypeRoomController,
  updateTypeRoomController,
} from "./typeRoom/typeRoom.controller";

export {
  createAttendantController,
  deleteAttendantController,
  loginAttendantController,
  updateAttendantController,
  createGuestController,
  deleteGuestController,
  getGuestController,
  updateGuestController,
  createHotelController,
  listHotelController,
  updateHotelController,
  loginManagerController,
  createManagerController,
  deleteManagerController,
  updateManagerController,
  createOfferController,
  deleteOfferController,
  listOfferController,
  updateOfferController,
  createReservationController,
  deleteReservationController,
  listReservationByIdController,
  listReservationController,
  updateReservationController,
  listRoomController,
  createRoomController,
  listRoomByIdController,
  updateRoomController,
  createTypeRoomController,
  listTypeRoomController,
  updateTypeRoomController,
  listReservationsHistoryController,
  listReservationsHistoryControllerBYFilter,
  loginController,
  listAttendantByIdController,
  listManagerByIdController,
};
