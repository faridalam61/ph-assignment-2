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

// Get Single product from database
const GetSingleProductService = async (id: string) => {
	try {
		const result = await ProductModel.findById(id);
		return result;
	} catch (err) {
		console.log(err);
	}
};

// Update product

const UpdateProductService = async (id: string, data: Product) => {
	try {
		const result = await ProductModel.updateOne({ _id: id }, { $set: data });
		return result;
	} catch (err) {
		console.log(err);
	}
};

// Delete a product

const DeleteProductService = async (id: string) => {
	try {
		const result = await ProductModel.deleteOne({ _id: id });
		return result;
	} catch (err) {
		console.log(err);
	}
};

// Search product

const SearchProductService = async (query: string) => {
	try {
		const result = await ProductModel.find({ name: query });
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const ProductService = {
	CreateProductService,
	GetAllProductsService,
	GetSingleProductService,
	UpdateProductService,
	DeleteProductService,
	SearchProductService,
};
