import { Router } from "express";
import { users } from "../utils/userStore";

const router = Router();

router.get("/", (req, res) => {
  res.json(users.map((u) => ({ id: u.id, username: u.username })));
});

export default router;
