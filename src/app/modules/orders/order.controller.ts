import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { OrderService } from "./order.service";
import { string } from "zod";

// Create order controller
const CreateOrderController = async (req: Request, res: Response) => {
	try {
		const parseOrder = await orderValidationSchema.parse(req.body);
		const result = await OrderService.CreateOrderService(parseOrder);

		if (!result) {
			res.status(500).json({
				success: false,
				message: "Failed to create order",
			});
		}
		res.status(200).json({
			success: true,
			message: "Order created successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
	}
};

// Get All orders controller

const GetAllOrderController = async (req: Request, res: Response) => {
	try {
		const filter = req.query.email;

		const result = await OrderService.GetAllOrdersService(filter);

		if (!result) {
			res.status(500).json({
				success: false,
				message: "Error fetching orders!",
			});
		}
		res.status(200).json({
			success: true,
			message: "Orders fetched successfully!",
			data: result,
		});
	} catch (err) {
		console.log(err);
	}
};

export const OrderController = {
	CreateOrderController,
	GetAllOrderController,
};
