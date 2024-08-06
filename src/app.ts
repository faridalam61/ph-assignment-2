import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./app/modules/products/product.route";
const app = express();

// Express Middleware
app.use(cors());
app.use(express.json());

// Api Routes

app.use("/api/products", ProductRouter);

app.get("/", (req: Request, res: Response) => {
	res.send("Server is up");
});

export default app;
