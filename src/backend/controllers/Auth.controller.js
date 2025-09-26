import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

// Generate access token with role
const generateAccessToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

// Generate refresh token
const generateRefreshToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered." });

    const user = await User.create({ username, email, password });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      message: "Registration successful",
      accessToken,
      refreshToken,
      user: { id: user._id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: { id: user._id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// REFRESH TOKEN
export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: "Refresh token required." });

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found." });

    if (user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: "Invalid refresh token." });
    }

    const newAccessToken = generateAccessToken(user);
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired refresh token." });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: "Refresh token required." });

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found." });

    user.refreshToken = null;
    await user.save();

    res.status(200).json({ message: "Logout successful." });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired refresh token." });
  }
};
