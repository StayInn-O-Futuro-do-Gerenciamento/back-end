import { z } from "zod";
import { offerCreateSchema, offerReturnSchema } from "../../schemas";

export type tOfferReq = z.infer<typeof offerCreateSchema>;
export type tOfferReturn = z.infer<typeof offerReturnSchema>;
