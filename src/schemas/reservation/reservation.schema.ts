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
export const reservationUpdateSchema = z
  .object({
    checkin: z.string().or(z.date()),
    checkout: z.string().or(z.date()),
    numberAdults: z.number(),
    numberKids: z.number(),
    feedBack: z.number(),
  })
  .partial();

export const reservationUpdateSchemaReturn = reservationUpdateSchema.extend({
  id: z.string(),
});

export const reservationReturnSchema = reservationCreateSchema.extend({
  id: z.string(),
  feedBack: z.string(),
  attendant: returnAttendantSchema,
  guest: returnGuestSchema,
  room: returnRoomCreateSchema,
});
