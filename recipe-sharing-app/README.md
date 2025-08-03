# Recipe Sharing Application

## Overview
The Recipe Sharing Application is a simple React application that allows users to share and manage their favorite recipes. Users can add new recipes and view a list of all submitted recipes. This application utilizes Zustand for state management, providing a seamless experience for managing the recipe data.

## Features
- Add new recipes with a title and description.
- View a list of all recipes added by users.

## Technologies Used
- React
- Zustand
- Vite

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/recipe-sharing-app.git
   ```
2. Navigate to the project directory:
   ```
   cd recipe-sharing-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and go to `http://localhost:3000` to view the application.

### Project Structure
```
recipe-sharing-app
├── src
│   ├── components
│   │   ├── AddRecipeForm.jsx
│   │   └── RecipeList.jsx
│   ├── recipeStore.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License
This project is open source and available under the MIT License.