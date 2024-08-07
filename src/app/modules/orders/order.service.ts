import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create order
const CreateOrderService = async (order: Order) => {
	try {
		const result = await OrderModel.create(order);
		return result;
	} catch (err) {
		console.log(err);
	}
};

// Get all orders
const GetAllOrdersService = async (filter: any) => {
	try {
		if (filter) {
			const result = await OrderModel.find({ email: filter });
			return result;
		}
		const result = await OrderModel.find();
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const OrderService = {
	CreateOrderService,
	GetAllOrdersService,
};
