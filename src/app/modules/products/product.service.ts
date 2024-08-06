import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

// Create product
const CreateProductService = async (product: Product) => {
	try {
		const result = await ProductModel.create(product);
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const ProductService = {
	CreateProductService,
};
