import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

// Create new product route

router.post("/", ProductController.CreateProductController);

// Get All Products from DB

router.get("/", ProductController.GetAllProductController);

export const ProductRouter = router;
