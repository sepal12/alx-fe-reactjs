import React, { useState } from 'react';
import './index.css';
import { SearchInput } from './components';
import { fetchUserData } from './services/githubApi';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (username) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError('User not found');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1>GitHub User Search</h1>
            <SearchInput onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div className="user-profile">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default App;