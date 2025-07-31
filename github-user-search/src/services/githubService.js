import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export async function searchUsers(username = '', location = '', repos = '') {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    throw error;
  }
}
