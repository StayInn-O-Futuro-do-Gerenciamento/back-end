import { z } from "zod";
import { managerReturnCreteSchema } from "../manager/manager.schema";

export const hotelCreateSchema = z.object({
  name: z.string().max(50).min(3),
  street: z.string().max(50).min(3),
  number: z.string().max(5),
  zipCode: z.string().max(8),
  city: z.string().max(40),
});

// export const returnHotelCreateSchema = attendantCreateSchema.partial();

// export const returnAttendantSchema = attendantCreateSchema
//   .extend({
//     id: z.string(),
//     type: z.string(),
//     manager: managerReturnCreteSchema,
//   })
//   .omit({ idManager: true });

// export const returnAttendantSchemaWithoutPass = returnAttendantSchema.omit({
//   password: true,
// });
