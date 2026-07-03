import {
  hasDeployment,
  hasReadme,
  isOriginalRepository,
} from "../utils/githubHelpers.js";

import {
  average,
  clampScore,
  percentage,
} from "../utils/scoreHelpers.js";

const calculatePortfolioScore = (repositories = []) => {
  if (!repositories.length) {
    return {
      portfolioScore: 0,
      breakdown: {
        repoQuality: 0,
        readme: 0,
        deployment: 0,
        techDiversity: 0,
        consistency: 0,
        projectExperience: 0,
      },
    };
  }

  // Ignore Forks
  const repos = repositories.filter(isOriginalRepository);

  const totalRepos = repos.length;

  if (!totalRepos) {
    return {
      portfolioScore: 0,
      breakdown: {
        repoQuality: 0,
        readme: 0,
        deployment: 0,
        techDiversity: 0,
        consistency: 0,
        projectExperience: 0,
      },
    };
  }

  // ===================================
  // README
  // ===================================

  const readmeRepos = repos.filter(hasReadme).length;

  const readmeScore = percentage(readmeRepos, totalRepos);

  // ===================================
  // Deployment
  // ===================================

  const deployedRepos = repos.filter(hasDeployment).length;

  const deploymentScore = percentage(deployedRepos, totalRepos);

  // ===================================
  // Repo Quality
  // ===================================

  const qualityScores = repos.map((repo) => {
    let score = 30; // Every original repo gets base score

    if (repo.description) score += 15;

    if (repo.language) score += 10;

    if (hasReadme(repo)) score += 20;

    if (hasDeployment(repo)) score += 10;

    if (repo.stargazers_count > 0) score += 5;

    if (repo.forks_count > 0) score += 5;

    if (repo.open_issues_count === 0) score += 5;

    return Math.min(score, 100);
  });

  const repoQualityScore = average(qualityScores);

  // ===================================
  // Tech Diversity
  // ===================================

  const languageSet = new Set();

  repos.forEach((repo) => {
    if (repo.language) languageSet.add(repo.language);
  });

  const techDiversityScore = clampScore(
    languageSet.size * 12 + 20
  );

  // ===================================
  // Consistency
  // ===================================

  const currentYear = new Date().getFullYear();

  const activeRepos = repos.filter(
    (repo) =>
      new Date(repo.updated_at).getFullYear() >=
      currentYear - 1
  ).length;

  const consistencyScore = percentage(
    activeRepos,
    totalRepos
  );

  // ===================================
  // Project Experience
  // ===================================

  let projectExperienceScore = 20;

  if (totalRepos >= 50)
    projectExperienceScore = 100;
  else if (totalRepos >= 30)
    projectExperienceScore = 85;
  else if (totalRepos >= 20)
    projectExperienceScore = 70;
  else if (totalRepos >= 10)
    projectExperienceScore = 55;
  else if (totalRepos >= 5)
    projectExperienceScore = 40;

  // ===================================
  // Final Score
  // ===================================

  const portfolioScore = Math.round(
    repoQualityScore * 0.30 +
      readmeScore * 0.15 +
      deploymentScore * 0.10 +
      techDiversityScore * 0.20 +
      consistencyScore * 0.15 +
      projectExperienceScore * 0.10
  );

  // ===================================
// Portfolio Rating
// ===================================

let overallRating = "";

if (portfolioScore >= 85) {
  overallRating = "Outstanding Portfolio";
} else if (portfolioScore >= 75) {
  overallRating = "Strong Portfolio";
} else if (portfolioScore >= 60) {
  overallRating = "Good Portfolio";
} else if (portfolioScore >= 40) {
  overallRating = "Learning Portfolio";
} else {
  overallRating = "Beginner Portfolio";
}
return {
  portfolioScore,

  overallRating,

  breakdown: {
    repoQuality: Math.round(repoQualityScore),
    readme: Math.round(readmeScore),
    deployment: Math.round(deploymentScore),
    techDiversity: Math.round(techDiversityScore),
    consistency: Math.round(consistencyScore),
    projectExperience: projectExperienceScore,
  },
};
};

export default calculatePortfolioScore;