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

export const OrderService = {
	CreateOrderService,
};
