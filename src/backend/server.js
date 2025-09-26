import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.routes.js";
import cors from "cors";

dotenv.config(); // Load .env variables



const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true, // if you use cookies
})); 
app.use(express.json());
app.use(cookieParser()); // Required for reading cookies

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected"); // ✅ Confirmation message

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

startServer();
