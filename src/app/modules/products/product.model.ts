import { model, Schema } from "mongoose";
import { Product, ProductInventory, ProductVariant } from "./product.interface";

const variantSchema = new Schema<ProductVariant>({
	type: { type: String, required: true },
	value: { type: String, required: true },
});

const inventorySchema = new Schema<ProductInventory>({
	quantity: { type: Number, required: true },
	inStock: { type: Boolean, required: true },
});
const productSchema = new Schema<Product>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	tags: [{ type: String }],
	variants: variantSchema,
	inventory: inventorySchema,
});

export const ProductModel = model<Product>("Product", productSchema);
