import { z } from "zod";
import {
  guestCreateSchema,
  guestUpdateSchema,
  returnGuestSchema,
} from "../../schemas";

export type tGuestReq = z.infer<typeof guestCreateSchema>;
export type tGuestUpdateReq = z.infer<typeof guestUpdateSchema>;
export type tGuestReturn = z.infer<typeof returnGuestSchema>;
