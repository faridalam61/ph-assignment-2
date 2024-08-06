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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// Create product
const CreateProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.create(product);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// Get all products from database
const GetAllProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.find();
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// Get Single product from database
const GetSingleProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.findById(id);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// Update product
const UpdateProductService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.updateOne({ _id: id }, { $set: data });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// Delete a product
const DeleteProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.deleteOne({ _id: id });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// Search product
const SearchProductService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.ProductModel.find({ name: query });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductService = {
    CreateProductService,
    GetAllProductsService,
    GetSingleProductService,
    UpdateProductService,
    DeleteProductService,
    SearchProductService,
};
