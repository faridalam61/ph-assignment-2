import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { OrderService } from "./order.service";

// Create order controller
const CreateOrderController = async (req: Request, res: Response) => {
	try {
		const parseOrder = await orderValidationSchema.parse(req.body);
		const result = await OrderService.CreateOrderService(parseOrder);

		if (!result) {
			res.status(500).json({
				success: false,
				message: "Failed to create product",
			});
		}
		res.status(200).json({
			success: true,
			message: "Failed to create product",
			data: result,
		});
	} catch (err) {
		console.log(err);
	}
};

export const OrderController = {
	CreateOrderController,
};
