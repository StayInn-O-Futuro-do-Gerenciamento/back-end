import { z } from "zod";

export const addressCreateSchema = z.object({
  street: z.string().max(100).min(3),
  number: z.string().max(10),
  city: z.string().max(50),
  state: z.string().max(50).min(2),
  zipCode: z.string().max(10),
});

export const addressReturnSchema = addressCreateSchema.extend({
  id: z.string(),
});
