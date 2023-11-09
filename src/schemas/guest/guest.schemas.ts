import { z } from "zod";
import {
  addressCreateSchema,
  addressReturnSchema,
} from "../address/address.schemas";

export const guestCreateSchema = z.object({
  name: z.string().max(50).min(3),
  rg: z.number().max(10).min(7),
  cpf: z.number().max(11),
  passport: z.number().max(6),
  nationality: z.string().max(15).min(3),
  phoneNumbers: z.array(z.string()),
  emergencyContacts: z.array(
    z.object({
      name: z.string(),
      phoneNumber: z.string(),
    })
  ),
  address: addressCreateSchema,
});

export const guestUpdateSchema = guestCreateSchema.partial();

export const returnGuestSchema = z.object({
  id: z.string(),
  name: z.string(),
  rg: z.number(),
  cpf: z.number(),
  passport: z.number(),
  nationality: z.string(),
  phoneNumbers: z.array(z.string().max(9)),
  emergencyContacts: z.array(
    z.object({
      name: z.string().max(50),
      phoneNumber: z.string().max(9),
    })
  ),
  address: addressReturnSchema,
});

export const guestReturnAllSchema = z.array(returnGuestSchema);
