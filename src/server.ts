import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

async function main() {
	try {
		await mongoose.connect(process.env.DB_URL as string);
		app.listen(port, () => {
			console.log("App has started on port", port);
		});
	} catch (err) {
		console.log(err);
	}
}

main();
