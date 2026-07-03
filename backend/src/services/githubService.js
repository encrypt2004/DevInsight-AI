import axios from "axios";

const BASE_URL = "https://api.github.com";

// Get GitHub Profile
export const getGithubProfile = async (username) => {
  const { data } = await axios.get(
    `${BASE_URL}/users/${username}`,
    {
      headers: {
        "User-Agent": "devinsight-ai",
      },
    }
  );

  return data;
};

// Get GitHub Repositories
export const getGithubRepositories = async (username) => {
  const { data } = await axios.get(
    `${BASE_URL}/users/${username}/repos?per_page=100`,
    {
      headers: {
        "User-Agent": "devinsight-ai",
      },
    }
  );

  return data;
};