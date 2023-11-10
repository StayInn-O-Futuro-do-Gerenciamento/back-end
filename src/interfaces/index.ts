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
  tManagerRequest,
  tManagerReturn,
  tManagerReturnWithoutPass,
  tManagerUpdate,
  tManagerUpdateRequest,
} from "./manager/manager.interface";

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
  tReturnUpdateTypeRoom,
  tUpdateTypeRoomRequest,
};
