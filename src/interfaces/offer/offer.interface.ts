import { z } from "zod";
import {
  offerCreateSchema,
  offerReturnSchema,
  offerUpdateSchema,
} from "../../schemas";

export type tOfferReq = z.infer<typeof offerCreateSchema>;
export type tOfferReqUpdate = z.infer<typeof offerUpdateSchema>;
export type tOfferReturn = z.infer<typeof offerReturnSchema>;
