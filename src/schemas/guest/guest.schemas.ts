import { z } from "zod";
import { addressCreateSchema } from "../address/address.schemas";

export const guestCreateSchema = z.object({
  name: z.string().max(50).min(3),
  rg: z.number().max(10).min(7),
  cpf: z.number().max(11),
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
  nationality: z.string(),
  phoneNumbers: z.array(z.string()),
  emergencyContacts: z.array(
    z.object({
      name: z.string().max(50),
      phoneNumber: z.string().max(9),
    })
  ),
  address: z.object({
    id: z.string(),
  }),
});
