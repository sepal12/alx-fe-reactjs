import { useState, useEffect } from "react";
import recipeData from "../data.json";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch from an API here
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
import { Link } from "react-router-dom";    
const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {recipe.title}
        </h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default HomePage;
