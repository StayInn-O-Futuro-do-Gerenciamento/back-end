import { z } from "zod";
import {
  returnRoomCreateSchema,
  returnTypeRoomCreateSchema,
  returnUpdateStatusRoomRequest,
  roomCreateSchema,
  typeRoomCreateSchema,
  updateStatusRoomRequest,
} from "../../schemas";

export type tRoomRequest = z.infer<typeof roomCreateSchema>;

export type tRoomReturn = z.infer<typeof returnRoomCreateSchema>;

export type tTypeRoomRequest = z.infer<typeof typeRoomCreateSchema>;

export type tTypeRoomReturn = z.infer<typeof returnTypeRoomCreateSchema>;

export type tReturnArrayRoom = Array<tRoomReturn>;

export type tUpdateTypeRoomRequest = z.infer<typeof updateStatusRoomRequest>;

export type tReturnUpdateTypeRoom = z.infer<
  typeof returnUpdateStatusRoomRequest
>;
