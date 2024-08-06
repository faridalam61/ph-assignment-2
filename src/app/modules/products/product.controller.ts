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

export const ProductController = {
	CreateProductController,
	GetAllProductController,
};
