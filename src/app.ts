import express, { NextFunction, Request, Response } from "express";
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

// Not found route
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).send({
		success: false,
		message: "Route not found",
	});
});
export default app;
