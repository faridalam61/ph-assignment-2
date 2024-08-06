import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

// Create new product route

router.post("/", ProductController.CreateProductController);

export const ProductRouter = router;
