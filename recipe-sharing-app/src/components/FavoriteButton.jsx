import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return isFavorite ? (
    <button onClick={() => removeFavorite(recipeId)}>Remove from Favorites</button>
  ) : (
    <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
  );
};

export default FavoriteButton;