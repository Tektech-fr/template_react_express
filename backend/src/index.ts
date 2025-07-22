import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import dataRoutes from "./routes/data";
import { verifyToken } from "./middleware/auth";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "https://work.tektech.fr",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/data", verifyToken, dataRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
