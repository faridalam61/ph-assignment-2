import { z } from "zod";

export const productVariantSchema = z.object({
	type: z.string(),
	value: z.string(),
});

export const productInventorySchema = z.object({
	quantity: z.number(),
	inStock: z.boolean(),
});

export const productSchema = z.object({
	name: z.string(),
	description: z.string(),
	price: z.number(),
	category: z.string(),
	tags: z.array(z.string()),
	variants: z.array(productVariantSchema),
	inventory: productInventorySchema,
});
