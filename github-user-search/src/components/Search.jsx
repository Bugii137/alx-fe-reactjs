import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    repos: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const users = await searchUsers(form.username, form.location, form.repos);
      setResults(users);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="repos"
          placeholder="Min Repositories"
          value={form.repos}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded md:col-span-3">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
