import { z } from "zod";
import { managerReturnCreteSchema } from "../manager/manager.schema";

export const hotelCreateSchema = z.object({
  name: z.string().max(50).min(3),
  street: z.string().max(50).min(3),
  number: z.string().max(5),
  zipCode: z.string().max(8),
  city: z.string().max(40),
  numberRoomsTotal: z.number(),
  roomsPerFloor: z.number(),
});

export const hotelReturnSchema = hotelCreateSchema.extend({
  id: z.string(),
});
export const hotelReturnAllSchema = z.array(hotelReturnSchema);

export const hotelUpdateSchema = hotelReturnSchema.partial();
