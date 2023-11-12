import { z } from "zod";

export const offerCreateSchema = z.object({
  offerName: z.string().max(80).min(3),
  offerDescription: z.string(),
  discount: z.number(),
  startDate: z.string().or(z.date()),
  finishDate: z.string().or(z.date()),
  typeRoom: z.string(),
});

export const offerUpdateSchema = offerCreateSchema.partial();

export const offerReturnSchema = offerCreateSchema
  .extend({
    id: z.string(),
  })
  .omit({ typeRoom: true });
