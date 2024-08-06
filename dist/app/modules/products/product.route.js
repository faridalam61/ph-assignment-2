"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
// Create new product route
router.post("/", product_controller_1.ProductController.CreateProductController);
// Get All Products from DB
router.get("/", product_controller_1.ProductController.GetAllProductController);
exports.ProductRouter = router;
