import { z } from "zod";
import { managerReturnCreteSchema } from "../manager/manager.schema";

export const attendantCreateSchema = z.object({
  name: z.string().max(50).min(3),
  password: z.string().max(20).min(8),
});

export const attendantUpdateSchema = attendantCreateSchema.partial();

export const returnAttendantSchema = attendantCreateSchema.extend({
  id: z.string(),
  type: z.string(),
  manager: managerReturnCreteSchema,
});

export const returnAttendantSchemaWithoutPass = returnAttendantSchema.omit({
  password: true,
});
