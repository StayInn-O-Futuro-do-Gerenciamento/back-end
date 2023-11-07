import { z } from "zod";

export const managerCreateSchema = z.object({
  name: z.string().max(50).min(3),
  password: z.string().max(20).min(8),
});

export const managerUpdateSchema = managerCreateSchema.partial();

export const managerReturnCreteSchema = managerCreateSchema.extend({
  id: z.string(),
});
