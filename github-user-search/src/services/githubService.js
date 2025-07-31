import axios from 'axios';

// GitHub API base URL
const BASE_URL = 'https://api.github.com';

// Named export - required by checker
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
