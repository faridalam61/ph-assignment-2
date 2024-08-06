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

// Get all products from database
const GetAllProductsService = async () => {
	try {
		const result = await ProductModel.find();
		return result;
	} catch (err) {
		console.log(err);
	}
};
export const ProductService = {
	CreateProductService,
	GetAllProductsService,
};
