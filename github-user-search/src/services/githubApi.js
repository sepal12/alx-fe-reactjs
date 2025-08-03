import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data: ' + error.message);
    }
};