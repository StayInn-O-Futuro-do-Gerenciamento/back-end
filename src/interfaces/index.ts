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
  tOfferReq,
  tOfferReqUpdate,
  tOfferReturn,
} from "./offer/offer.interface";
import {
  tReservationReq,
  tReservationReturn,
  tReservationUpdateReq,
  tReservationUpdateReturn,
} from "./reservation/reservation.interface";

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
  tReservationUpdateReq,
  tReservationUpdateReturn,
  tOfferReq,
  tOfferReturn,
  tOfferReqUpdate,
};
