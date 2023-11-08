import { addressCreateSchema } from "./address/address.schemas";
import {
  attendantCreateSchema,
  attendantUpdateSchema,
  returnAttendantSchema,
  returnAttendantSchemaWithoutPass,
} from "./attendant/attendant.schemas";
import {
  guestCreateSchema,
  guestUpdateSchema,
  returnGuestSchema,
} from "./guest/guest.schemas";
import {
  managerCreateSchema,
  managerUpdateSchema,
  managerReturnCreteSchema,
  managerReturnCreteSchemaWhithoutPass,
} from "./manager/manager.schema";

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
};
