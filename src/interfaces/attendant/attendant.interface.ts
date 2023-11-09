import { z } from "zod";
import {
  attendantCreateSchema,
  attendantUpdateSchema,
  returnAttendantSchema,
  returnAttendantSchemaWithoutPass,
} from "../../schemas";

export type tAttendantReq = z.infer<typeof attendantCreateSchema>;
export type tAttendantUpdateReq = z.infer<typeof attendantUpdateSchema>;
export type tAttendantReturn = z.infer<typeof returnAttendantSchema>;
export type tAttendantReturnWithoutPass = z.infer<
  typeof returnAttendantSchemaWithoutPass
>;
export type tAttendantReqLogin = Omit<tAttendantReq, "idManager">;
export type tAttendantReturnWithoutPassManager = Omit<
  tAttendantReturnWithoutPass,
  "manager.password"
>;
