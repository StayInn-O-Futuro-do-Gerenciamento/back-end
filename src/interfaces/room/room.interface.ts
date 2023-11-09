import { z } from "zod";
import {
  returnRoomCreateSchema,
  returnTypeRoomCreateSchema,
  roomCreateSchema,
  typeRoomCreateSchema,
} from "../../schemas";

export type tRoomRequest = z.infer<typeof roomCreateSchema>;

export type tRoomReturn = z.infer<typeof returnRoomCreateSchema>;

export type tTypeRoomRequest = z.infer<typeof typeRoomCreateSchema>;

export type tTypeRoomReturn = z.infer<typeof returnTypeRoomCreateSchema>;
