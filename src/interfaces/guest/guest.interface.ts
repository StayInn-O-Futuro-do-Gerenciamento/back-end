import { z } from "zod";
import {
  guestCreateSchema,
  guestReturnAllSchema,
  guestUpdateSchema,
  returnGuestSchema,
} from "../../schemas";
import { DeepPartial } from "typeorm";

export type tGuestReq = z.infer<typeof guestCreateSchema>;
export type tGuestUpdateReq = z.infer<typeof guestUpdateSchema>;
export type tGuestReturn = z.infer<typeof returnGuestSchema>;
export type tGuestUpdate = DeepPartial<tGuestUpdateReq>;
export type tGuestReturnAllSchema = z.infer<typeof guestReturnAllSchema>;
