import { z } from "zod";
import { hotelReturnSchema } from "../hotel/createHotel.schema";

export const typeRoomCreateSchema = z.object({
  name: z.string(),
  description: z.string(),
  confort: z.string(),
  price: z.number(),
  personCount: z.number(),
  rate: z.string(),
  roomTypeQuantity: z.number(),
});

export const returnTypeRoomCreateSchema = typeRoomCreateSchema.extend({
  id: z.string(),
});

export const roomCreateSchema = z.object({
  status: z.string(),
  typeRoom: typeRoomCreateSchema,
  hotel: hotelReturnSchema,
});

export const returnRoomCreateSchema = roomCreateSchema.extend({
  id: z.string(),
  numberRoom: z.number(),
  secretKey: z.string(),
  floor: z.string(),
  typeRoom: returnTypeRoomCreateSchema,
});

export const updateStatusRoomRequest = z.object({
  status: z.string(),
});

export const returnUpdateStatusRoomRequest = updateStatusRoomRequest.extend({
  id: z.string(),
  roomNumber: z.string(),
  secretKey: z.string(),
  floor: z.string(),
});
