import analyzeGithubProfile from "../services/analysisService.js";

// GET /api/analyze/:username
export const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await analyzeGithubProfile(username);

    res.status(200).json({
      success: true,
      source: result.source,
      data: result.data,
    });
  } catch (error) {
    console.error(error);

    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        message: "GitHub user not found.",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong.",
    });
  }
};