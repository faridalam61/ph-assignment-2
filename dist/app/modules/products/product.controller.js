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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
//  Create new product controller
const CreateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = product_validation_1.productValidationSchema.parse(req.body);
        const result = yield product_service_1.ProductService.CreateProductService(product);
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
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Product creation failed!",
        });
    }
});
// Get All Products controller
const GetAllProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.GetAllProductsService();
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
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Fetching products failed!",
        });
    }
});
// Get single product from db
const GetSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.GetSingleProductService(productId);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Product fetching failed!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Product fetching failed!",
        });
    }
});
// Update product controller
const UpdateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = req.body;
        const result = yield product_service_1.ProductService.UpdateProductService(productId, product);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Product update failed!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Product update failed!",
        });
    }
});
// Delete product controller
const DeleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.DeleteProductService(productId);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Delete product failed!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Delete product failed!",
        });
    }
});
// search product
const SearchProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductService.SearchProductService(searchTerm);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: "Delete product failed!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Delete product failed!",
        });
    }
});
exports.ProductController = {
    CreateProductController,
    GetAllProductController,
    GetSingleProductController,
    UpdateProductController,
    DeleteProductController,
    SearchProductController,
};
