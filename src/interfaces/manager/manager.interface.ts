import { z } from "zod";
import {
  managerCreateSchema,
  managerReturnCreteSchema,
  managerUpdateSchema,
} from "../../schemas";
import { DeepPartial } from "typeorm";

export type tManagerRequest = z.infer<typeof managerCreateSchema>;

export type tManagerUpdateRequest = z.infer<typeof managerUpdateSchema>;

export type tManagerReturn = z.infer<typeof managerReturnCreteSchema>;

export type tManagerReturnWithoutPass = Omit<tManagerReturn, "password">;

export type tManagerUpdate = DeepPartial<tManagerUpdateRequest>;
