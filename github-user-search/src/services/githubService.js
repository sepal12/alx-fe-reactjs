import axios from "axios";

// Fetch a single user's details by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });
  return response.data;
};

// Advanced search for users by username, location, and minRepos
// Example endpoint: https://api.github.com/search/users?q
export const fetchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get("https://api.github.com/search/users", {
      params: {
        q: query.trim(),
        per_page: 10,
        page,
      },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};