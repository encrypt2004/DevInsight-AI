import Analysis from "../models/Analysis.js";

import {
  getGithubProfile,
  getGithubRepositories,
} from "./githubService.js";

import generatePortfolioAnalysis from "./geminiService.js";

import calculateStats from "../utils/calculateStats.js";
import calculateLanguages from "../utils/calculateLanguages.js";

import calculatePortfolioScore from "./portfolioScoringService.js";

const analyzeGithubProfile = async (username) => {
  // 1. Check MongoDB Cache
  const cachedAnalysis = await Analysis.findOne({
    githubUsername: username.toLowerCase(),
  });

  if (cachedAnalysis) {
    return {
      source: "cache",
      data: cachedAnalysis,
    };
  }

  // 2. Fetch GitHub Profile
  const profile = await getGithubProfile(username);

  // 3. Fetch GitHub Repositories
  const repositories = await getGithubRepositories(username);

  // 4. Calculate Statistics
  const repositoryStatistics = calculateStats(repositories);

  // 5. Calculate Language Distribution
  const languageDistribution = calculateLanguages(repositories);

  // 6. Calculate Portfolio Score
  const portfolioMetrics = calculatePortfolioScore(repositories);

  // 7. Generate AI Analysis
  const aiAnalysis = await generatePortfolioAnalysis({
    profile,
    statistics: repositoryStatistics,
    languages: languageDistribution,
    portfolioMetrics,
  });

  // 8. Save or Update MongoDB
  
//   const analysis = await Analysis.findOneAndUpdate(
//     {
//       githubUsername: username.toLowerCase(),
//     },
//     {
//       githubUsername: username.toLowerCase(),

//       profile: {
//         avatarUrl: profile.avatar_url,
//         name: profile.name,
//         username: profile.login,
//         bio: profile.bio,
//         followers: profile.followers,
//         following: profile.following,
//         publicRepos: profile.public_repos,
//       },

//       repositoryStatistics,

//       languageDistribution,

//       portfolioMetrics,

//       aiAnalysis,
//     },
//    {
//   returnDocument: "after",
//   upsert: true,
// }
//   );

//   return {
//     source: "github",
//     data: analysis,
//   };


console.log("Saving to MongoDB...");

const analysis = await Analysis.findOneAndUpdate(
  {
    githubUsername: username.toLowerCase(),
  },
  {
    githubUsername: username.toLowerCase(),

    profile: {
      avatarUrl: profile.avatar_url,
      name: profile.name,
      username: profile.login,
      bio: profile.bio,
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos,
    },

    repositoryStatistics,
    languageDistribution,
    portfolioMetrics,
    aiAnalysis,
  },
  {
    upsert: true,
    returnDocument: "after",
  }
);

console.log("Saved Successfully");
console.log(analysis);

return {
  source: "github",
  data: analysis,
};

};

export default analyzeGithubProfile;