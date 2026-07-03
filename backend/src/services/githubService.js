import axios from "axios";

const BASE_URL = "https://api.github.com";

const getHeaders = () => ({
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  "User-Agent": "DevInsight-AI",
});

// Get GitHub Profile
export const getGithubProfile = async (username) => {
  const { data } = await axios.get(
    `${BASE_URL}/users/${username}`,
    {
      headers: getHeaders(),
    }
  );

  return data;
};

// Get GitHub Repositories
export const getGithubRepositories = async (username) => {
  const { data } = await axios.get(
    `${BASE_URL}/users/${username}/repos`,
    {
      headers: getHeaders(),
      params: {
        per_page: 100,
        sort: "updated",
      },
    }
  );

  return data;
};