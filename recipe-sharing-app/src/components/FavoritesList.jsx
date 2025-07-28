// src/components/FavouritesList.jsx
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavouritesList = () => {
  const { recipes, favorites } = useRecipeStore();

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>Favourite Recipes</h2>
      <ul>
        {favRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
