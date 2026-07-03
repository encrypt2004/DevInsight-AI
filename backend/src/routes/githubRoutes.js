import express from "express";

import {
  getProfile,
  getRepositories,
  getRepositoryStats,
  getLanguageDistribution,
} from "../controllers/githubController.js";

const router = express.Router();

// Profile
router.get("/profile/:username", getProfile);

// Repositories
router.get("/repos/:username", getRepositories);

// Repository Statistics
router.get("/stats/:username", getRepositoryStats);

// Language Distribution
router.get("/languages/:username", getLanguageDistribution);

export default router;