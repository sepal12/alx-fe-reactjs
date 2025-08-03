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