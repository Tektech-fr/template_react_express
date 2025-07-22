import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "../utils/userStore";

const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const jwtSecret = process.env.JWT_SECRET!;
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1h";
  const token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  });

  res.json({ token });
});

export default router;
