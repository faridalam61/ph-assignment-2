"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
// Express Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Product Routes
app.use("/api/products", product_route_1.ProductRouter);
// Order Routes
app.use("/api/orders", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.send("Server is up");
});
// Not found route
app.use((req, res, next) => {
    res.status(404).send({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
