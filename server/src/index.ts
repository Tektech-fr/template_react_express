import dotenv from "dotenv";
import express, { Request, Response } from "express";
import pool from "./db/db";

dotenv.config();

/**
 * Define the Express server configuration.
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * Use CORS middleware.
 */

import cors from "cors";

const corsOptions = {
	origin: "*", // Allow all origins for simplicity; adjust as needed for security
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow all common HTTP methods
	allowedHeaders: "Content-Type, Authorization", // Allow specific headers
};

app.use(cors(corsOptions));

/**
 * Middleware to parse JSON bodies.
 */

app.use(express.json());

/**
 * Testing the database connection.
 */

pool.getConnection()
	.then((connection) => {
		console.log("Database connection successful!");
		connection.release();
	})
	.catch((error) => {
		console.error("Database connection failed:", error);
		process.exit(1); // Exit the process if the database connection fails
	});

/**
 * Define a simple route for testing.
 */
app.get("/health", (req: Request, res: Response) => {
	res.json({ status: "Server is healthy" });
});

app.get("/api", (req: Request, res: Response) => {
	res.send("Hello, TypeScript with Express!");
});

app.get("/api/db-test", async (req: Request, res: Response) => {
	try {
		const [rows] = await pool.query("SELECT * from user");
		res.json({ users: rows });
	} catch (error) {
		console.error("Database query failed:", error);
		res.status(500).json({ error: "Database query failed" });
	}
});

/**
 * Start the Express server.
 */
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
