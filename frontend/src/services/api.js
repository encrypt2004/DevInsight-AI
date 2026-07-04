import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeGitHubProfile = (username) => {
  return api.get(`/analyze/${username}`);
};

export default api;