import { z } from "zod";
import {
  reservationCreateSchema,
  reservationReturnSchema,
} from "../../schemas";

export type tReservationReq = z.infer<typeof reservationCreateSchema>;
export type tReservationReturn = z.infer<typeof reservationReturnSchema>;
