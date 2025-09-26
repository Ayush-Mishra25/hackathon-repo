import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

/**
 * Middleware to verify access token and refresh if expired
 */
export const verifyJWT = async (req, res, next) => {
  try {
    // Read access token from header or cookie
    const authHeader = req.header("Authorization");
    let accessToken = authHeader?.replace("Bearer ", "") || req.cookies?.accessToken;

    if (!accessToken) return res.status(401).json({ error: "Access token missing" });

    try {
      // Verify access token
      const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(401).json({ error: "User not found" });

      req.user = user;
      next();
    } catch (err) {
      if (err.name !== "TokenExpiredError") throw err;

      // Access token expired, try refresh
      const refreshToken = req.cookies?.refreshToken || req.body.refreshToken;
      if (!refreshToken) return res.status(401).json({ error: "Access token expired, refresh token missing" });

      const decodedRefresh = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
      const user = await User.findById(decodedRefresh.id).select("-password");
      if (!user) return res.status(401).json({ error: "User not found" });

      if (user.refreshToken !== refreshToken) return res.status(403).json({ error: "Refresh token mismatch" });

      // Issue new access token
      const newAccessToken = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      // Send new access token as httpOnly cookie
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60 * 1000,
      });

      req.user = user;
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error.message || "Unauthorized" });
  }
};

/**
 * Middleware to allow only admin users
 */
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") next();
  else res.status(403).json({ error: "Admin access only" });
};
