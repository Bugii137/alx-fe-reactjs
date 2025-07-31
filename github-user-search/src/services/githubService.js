// src/services/githubService.js
import axios from 'axios';

export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = `${query}`;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
    return response.data.items;
  } catch (error) {
    console.error('GitHub API error:', error);
    return [];
  }
};
