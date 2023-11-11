import { z } from "zod";
import {
  reservationCreateSchema,
  reservationReturnSchema,
  reservationUpdateSchema,
  reservationUpdateSchemaReturn,
} from "../../schemas";

export type tReservationReq = z.infer<typeof reservationCreateSchema>;
export type tReservationReturn = z.infer<typeof reservationReturnSchema>;
export type tReservationUpdateReq = z.infer<typeof reservationUpdateSchema>;
export type tReservationUpdateReturn = z.infer<
  typeof reservationUpdateSchemaReturn
>;
