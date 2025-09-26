import express from "express";
import { register, login, refreshToken, logout } from "../controllers/Auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);

// Logout can be protected or public depending on your logic
// Here we protect it to ensure only logged-in users can logout
router.post("/logout", logout);

export default router;
