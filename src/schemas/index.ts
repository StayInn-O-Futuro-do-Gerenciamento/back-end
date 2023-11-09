import {
  attendantCreateSchema,
  attendantUpdateSchema,
  returnAttendantSchema,
  returnAttendantSchemaWithoutPass,
} from "./attendant/attendant.schemas";
import {
  managerCreateSchema,
  managerUpdateSchema,
  managerReturnCreteSchema,
  managerReturnCreteSchemaWhithoutPass,
} from "./manager/manager.schema";

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
  roomCreateSchema,
  typeRoomCreateSchema,
  returnRoomCreateSchema,
  returnTypeRoomCreateSchema,
  updateStatusRoomRequest,
  returnUpdateStatusRoomRequest,
};
