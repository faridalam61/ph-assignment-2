import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./app/modules/products/product.route";
import { OrderRoute } from "./app/modules/orders/order.route";
const app = express();

// Express Middleware
app.use(cors());
app.use(express.json());

// Product Routes
app.use("/api/products", ProductRouter);

// Order Routes
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
	res.send("Server is up");
});

export default app;
