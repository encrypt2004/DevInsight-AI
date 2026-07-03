import express from "express";
import cors from "cors";

import githubRoutes from "./routes/githubRoutes.js";
import analysisRoutes from "./routes/analysisRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevInsight AI Backend is Running 🚀",
  });
});

// Routes
app.use("/api", githubRoutes);
app.use("/api", analysisRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;