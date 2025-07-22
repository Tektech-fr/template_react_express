import express from "express";
import cors from "cors";
import { pool } from "./db";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = +process.env.PORT!;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(cors({ origin: allowedOrigins }));

app.get("/api/data", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
});

app.listen(port, () => console.log(`API running on port ${port}`));
