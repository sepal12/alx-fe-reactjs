import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={80} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;



import { useState } from 'react';
import { fetchUsers } from '../services/githubService';
{
  const [form, setForm] = useState({ username: '', location: '', minRepos: '' });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, nextPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(nextPage);
    try {
      const data = await fetchUsers({ ...form, page: nextPage });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow rounded p-4"
      >
        <input
          className="border p-2 rounded"
          type="text"
          name="username"
          placeholder="GitHub Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="border p-2 rounded"
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          className="border p-2 rounded"
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories"
          value={form.minRepos}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6">
        {users.length > 0 && (
          <>
            <p className="mb-2 text-gray-700">
              Showing {users.length} of {totalCount} results
            </p>
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded shadow">
                  <img src={user.avatar_url} alt={user.login} className="w-14 h-14 rounded-full" />
                  <div>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold hover:underline"
                    >
                      {user.login}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4">
              <button
                disabled={page === 1}
                onClick={(e) => handleSubmit(e, page - 1)}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                disabled={users.length < 10}
                onClick={(e) => handleSubmit(e, page + 1)}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
import { useState } from 'react';
import { fetchUsers } from '../services/githubService';
