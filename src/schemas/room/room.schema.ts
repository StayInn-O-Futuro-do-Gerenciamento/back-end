import { z } from "zod";

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
  numberRoom: z.number(),
  secretKey: z.string(),
  floor: z.string(),
});
