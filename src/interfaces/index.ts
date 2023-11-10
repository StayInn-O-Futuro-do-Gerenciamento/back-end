import {
  tAttendantReq,
  tAttendantReqLogin,
  tAttendantReturn,
  tAttendantReturnWithoutPass,
  tAttendantReturnWithoutPassManager,
  tAttendantUpdateReq,
} from "./attendant/attendant.interface";
import { tGuestReturnAllSchema, tGuestUpdate } from "./guest/guest.interface";
import {
  tHotelCreate,
  tHotelReturn,
  tHotelUpdate,
  tHotelAllReturn,
} from "./hotel/hotel.interface";

import {
  tManagerRequest,
  tManagerReturn,
  tManagerReturnWithoutPass,
  tManagerUpdate,
  tManagerUpdateRequest,
} from "./manager/manager.interface";
import {
  tReservationReq,
  tReservationReturn,
} from "./reservation/reservation.schema";

import {
  tRoomRequest,
  tRoomReturn,
  tTypeRoomRequest,
  tTypeRoomReturn,
  tReturnArrayRoom,
  tUpdateTypeRoomRequest,
  tReturnUpdateTypeRoom,
} from "./room/room.interface";

export {
  tAttendantReq,
  tAttendantReturnWithoutPass,
  tAttendantReturn,
  tAttendantUpdateReq,
  tManagerRequest,
  tManagerReturn,
  tManagerReturnWithoutPass,
  tManagerUpdate,
  tManagerUpdateRequest,
  tAttendantReqLogin,
  tAttendantReturnWithoutPassManager,
  tGuestUpdate,
  tRoomRequest,
  tRoomReturn,
  tTypeRoomRequest,
  tTypeRoomReturn,
  tReturnArrayRoom,
  tGuestReturnAllSchema,
  tUpdateTypeRoomRequest,
  tReturnUpdateTypeRoom,
  tHotelCreate,
  tHotelReturn,
  tHotelUpdate,
  tHotelAllReturn,
  tReservationReq,
  tReservationReturn,
};
