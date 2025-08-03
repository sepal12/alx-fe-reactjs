# GitHub User Search Application

This project is a GitHub User Search Application built with React. It allows users to search for GitHub profiles using the GitHub API and displays basic user information along with links to their profiles.

## Project Structure

```
github-user-search
├── src
│   ├── components        # Contains React components for the application
│   ├── services          # Contains services for API calls
│   ├── App.jsx           # Main component that sets up routing and layout
│   ├── main.jsx          # Entry point for the React application
│   └── index.css         # Global styles for the application
├── .env                  # Environment variables (e.g., API keys)
├── package.json          # npm configuration file
├── vite.config.js        # Vite configuration settings
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/github-user-search.git
   cd github-user-search
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your GitHub API key:
   ```
   VITE_APP_GITHUB_API_KEY=your_api_key_here
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Enter a GitHub username in the search input.
- Click the search button to fetch and display user information.
- Click on the user links to navigate to their GitHub profiles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.