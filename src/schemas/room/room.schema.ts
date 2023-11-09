import { z } from "zod";

export const typeRoomCreateSchema = z.object({
  name: z.string(),
  description: z.string(),
  confort: z.string(),
  price: z.number(),
  personCount: z.number(),
  rate: z.string(),
  quantity: z.number(),
});

export const returnTypeRoomCreateSchema = typeRoomCreateSchema.extend({
  id: z.number().int(),
});

export const roomCreateSchema = z.object({
  numberRoom: z.number(),
  status: z.string(),
  secretKey: z.string(),
  floor: z.string(),
  typeRoom: typeRoomCreateSchema,
});

export const returnRoomCreateSchema = roomCreateSchema.extend({
  id: z.number().int(),
  typeRoom: returnTypeRoomCreateSchema,
});
