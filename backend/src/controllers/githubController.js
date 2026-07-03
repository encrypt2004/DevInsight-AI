import {
  getGithubProfile,
  getGithubRepositories,
} from "../services/githubService.js";

import calculateStats from "../utils/calculateStats.js";
import calculateLanguages from "../utils/calculateLanguages.js";

// GET /api/profile/:username
export const getProfile = async (req, res) => {
  try {
    const profile = await getGithubProfile(req.params.username);

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "GitHub user not found.",
    });
  }
};

// GET /api/repos/:username
export const getRepositories = async (req, res) => {
  try {
    const repositories = await getGithubRepositories(req.params.username);

    res.status(200).json({
      success: true,
      data: repositories,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Repositories not found.",
    });
  }
};

// GET /api/stats/:username
export const getRepositoryStats = async (req, res) => {
  try {
    const repositories = await getGithubRepositories(req.params.username);

    const stats = calculateStats(repositories);

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to fetch repository statistics.",
    });
  }
};

// GET /api/languages/:username
export const getLanguageDistribution = async (req, res) => {
  try {
    const repositories = await getGithubRepositories(req.params.username);

    const languages = calculateLanguages(repositories);

    res.status(200).json({
      success: true,
      data: languages,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to fetch language distribution.",
    });
  }
};