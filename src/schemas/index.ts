import { addressCreateSchema } from "./address/address.schemas";
import {
  attendantCreateSchema,
  attendantUpdateSchema,
  returnAttendantSchema,
  returnAttendantSchemaWithoutPass,
} from "./attendant/attendant.schemas";
import {
  guestCreateSchema,
  guestReturnAllSchema,
  guestUpdateSchema,
  returnGuestSchema,
} from "./guest/guest.schemas";
import {
  hotelCreateSchema,
  hotelReturnSchema,
  hotelReturnAllSchema,
  hotelUpdateSchema,
} from "./hotel/createHotel.schema";
import {
  managerCreateSchema,
  managerUpdateSchema,
  managerReturnCreteSchema,
  managerReturnCreteSchemaWhithoutPass,
} from "./manager/manager.schema";
import {
  reservationCreateSchema,
  reservationReturnSchema,
  reservationUpdateSchema,
  reservationUpdateSchemaReturn,
} from "./reservation/reservation.schema";

import {
  roomCreateSchema,
  typeRoomCreateSchema,
  returnRoomCreateSchema,
  returnTypeRoomCreateSchema,
  updateStatusRoomRequest,
  returnUpdateStatusRoomRequest,
} from "./room/room.schema";

export {
  managerCreateSchema,
  managerUpdateSchema,
  managerReturnCreteSchema,
  managerReturnCreteSchemaWhithoutPass,
  attendantCreateSchema,
  attendantUpdateSchema,
  returnAttendantSchema,
  returnAttendantSchemaWithoutPass,
  guestCreateSchema,
  addressCreateSchema,
  guestUpdateSchema,
  returnGuestSchema,
  roomCreateSchema,
  typeRoomCreateSchema,
  returnRoomCreateSchema,
  returnTypeRoomCreateSchema,
  updateStatusRoomRequest,
  returnUpdateStatusRoomRequest,
  guestReturnAllSchema,
  hotelCreateSchema,
  hotelReturnSchema,
  hotelReturnAllSchema,
  hotelUpdateSchema,
  reservationCreateSchema,
  reservationReturnSchema,
  reservationUpdateSchema,
  reservationUpdateSchemaReturn,
};
