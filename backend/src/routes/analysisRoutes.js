import express from "express";
import { analyzeProfile } from "../controllers/analysisController.js";

const router = express.Router();

// Analyze GitHub Profile
router.get("/analyze/:username", analyzeProfile);

export default router;