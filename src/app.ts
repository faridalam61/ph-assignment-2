import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// Express Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Server is up");
});

export default app;
