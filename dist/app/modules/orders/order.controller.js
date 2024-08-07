"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
// Create order controller
const CreateOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parseOrder = yield order_validation_1.orderValidationSchema.parse(req.body);
        const result = yield order_service_1.OrderService.CreateOrderService(parseOrder);
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
    }
    catch (err) {
        console.log(err);
    }
});
// Get All orders controller
const GetAllOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.GetAllOrdersService();
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
    }
    catch (err) {
        console.log(err);
    }
});
exports.OrderController = {
    CreateOrderController,
    GetAllOrderController,
};
