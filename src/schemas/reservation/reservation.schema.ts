import { z } from "zod";
import {
  returnAttendantSchema,
  returnGuestSchema,
  returnRoomCreateSchema,
} from "../index";

export const reservationCreateSchema = z.object({
  checkin: z.string().or(z.date()),
  checkout: z.string().or(z.date()),
  numberAdults: z.number(),
  numberKids: z.number(),
  room: z.string(),
  guest: z.string(),
});

export const reservationReturnSchema = reservationCreateSchema.extend({
  id: z.string(),
  feedback:z.string(),
  attendant: returnAttendantSchema,
  guest: returnGuestSchema,
  room: returnRoomCreateSchema,
});
