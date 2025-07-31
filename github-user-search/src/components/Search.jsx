import React, { useState } from 'react';
import { fetchGitHubUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const users = await fetchGitHubUsers(username, location, minRepos);
      setResults(users);
      setError('');
    } catch (err) {
      setError('Error fetching users');
      setResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search by username"
          className="border rounded p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location"
          className="border rounded p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          className="border rounded p-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="border p-4 rounded shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.login}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4">Looks like we can't find the user</p>
        )}
      </div>
    </div>
  );
};

export default Search;
