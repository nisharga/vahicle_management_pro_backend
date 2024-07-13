import { z } from "zod";

const AccessoryZodSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    accessory_name: z.string(),
    amount: z.number(),
    description: z.string().optional(),
    quantity: z.number(),
    purchase_date: z.string(),
    expire_date: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const accessoryZodValidation = {
  AccessoryZodSchema,
};
