import { createAttendantService } from "./attendant/createAttendant.service";
import { deleteAttendantService } from "./attendant/deleteAttendant.service";
import { loginAttendantService } from "./attendant/loginAttendant.service";
import { updateAttendantService } from "./attendant/updateAttendant.service";
import { createGuestService } from "./guest/createGuest.service";
import { deleteGuestService } from "./guest/deleteGuest.service";
import { listAllGuestService } from "./guest/listAllGuest.service";
import { updateGuestService } from "./guest/updateGuest.service";
import { createManagerService } from "./manager/createManager.service";
import { deleteManagerService } from "./manager/deleteManager.service";
import { loginManagerService } from "./manager/loginManager.service";
import { updateManagerService } from "./manager/updateManager.service";
import { createRoomService } from "./room/createRoom.service";
import { listRoomService } from "./room/listRoom.service";
import { updateRoomService } from "./room/updateRoom.service";
import { listTypeRoomService } from "./typeRoom/listTypeRoom.service";
import { updateTypeRoomService } from "./typeRoom/updateTypeRoom.service";

export {
  createManagerService,
  deleteManagerService,
  loginManagerService,
  updateManagerService,
  updateAttendantService,
  createAttendantService,
  deleteAttendantService,
  loginAttendantService,
  createGuestService,
  updateGuestService,
  deleteGuestService,
  createRoomService,
  listRoomService,
  updateRoomService,
  listTypeRoomService,
  updateTypeRoomService,
  listAllGuestService,
};
