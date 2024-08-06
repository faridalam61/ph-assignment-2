import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { productValidationSchema } from "./product.validation";

//  Create new product controller
const CreateProductController = async (req: Request, res: Response) => {
	try {
		const product = productValidationSchema.parse(req.body);
		const result = await ProductService.CreateProductService(product);

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Product creation failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product created successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Product creation failed!",
		});
	}
};

// Get All Products controller

const GetAllProductController = async (req: Request, res: Response) => {
	try {
		const result = await ProductService.GetAllProductsService();

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Fetching products failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Products fetched successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Fetching products failed!",
		});
	}
};

// Get single product from db

const GetSingleProductController = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;
		const result = await ProductService.GetSingleProductService(productId);

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Product fetching failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product fetched successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Product fetching failed!",
		});
	}
};

// Update product controller

const UpdateProductController = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;
		const product = req.body;
		const result = await ProductService.UpdateProductService(
			productId,
			product
		);

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Product update failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product updated successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Product update failed!",
		});
	}
};

// Delete product controller

const DeleteProductController = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;
		const result = await ProductService.DeleteProductService(productId);

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Delete product failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product deleted successfully!",
			data: null,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Delete product failed!",
		});
	}
};

// search product

const SearchProductController = async (req: Request, res: Response) => {
	try {
		const { searchTerm } = req.query;
		const result = await ProductService.SearchProductService(
			searchTerm as string
		);

		if (!result) {
			return res.status(500).json({
				success: false,
				message: "Delete product failed!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product deleted successfully!",
			data: null,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: "Delete product failed!",
		});
	}
};

export const ProductController = {
	CreateProductController,
	GetAllProductController,
	GetSingleProductController,
	UpdateProductController,
	DeleteProductController,
	SearchProductController,
};
