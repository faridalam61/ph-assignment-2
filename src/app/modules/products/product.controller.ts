import { Request, Response } from "express";
import { ProductService } from "./product.service";

//  Create new product controller

const CreateProductController = async (req: Request, res: Response) => {
	try {
		const product = req.body;
		const result = await ProductService.CreateProductService(product);

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

export const ProductController = {
	CreateProductController,
};
