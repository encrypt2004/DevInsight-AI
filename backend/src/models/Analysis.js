import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    githubUsername: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    profile: {
      avatarUrl: String,
      name: String,
      username: String,
      bio: String,
      followers: Number,
      following: Number,
      publicRepos: Number,
    },

    repositoryStatistics: {
      totalRepositories: Number,
      totalStars: Number,
      totalForks: Number,
    },

    languageDistribution: [
      {
        language: String,
        count: Number,
      },
    ],

    // ⭐ NEW
    portfolioMetrics: {
      portfolioScore: Number,

      breakdown: {
        repoQuality: Number,
        readme: Number,
        deployment: Number,
        techDiversity: Number,
        consistency: Number,
      },
    },

    aiAnalysis: {
      overallRating: String,
      portfolioScore: Number,

      strengths: [String],

      weaknesses: [String],

      recommendedSkills: [String],

      careerFit: {
        frontend: String,
        backend: String,
        fullStack: String,
      },

      hiringRecommendation: {
        status: String,
        reason: String,
      },
    },
  },
  {
    timestamps: true,
  }
);
const Analysis =
  mongoose.models.Analysis ||
  mongoose.model("Analysis", analysisSchema);

export default Analysis;