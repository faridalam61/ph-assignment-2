import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

// Create new order
router.post("/", OrderController.CreateOrderController);

// Get all orders

router.get("/", OrderController.GetAllOrderController);

export const OrderRoute = router;
