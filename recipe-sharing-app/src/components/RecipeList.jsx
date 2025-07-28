import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom'; // ✅ Required for navigation

const RecipeList = () => {
  const { recipes, searchQuery, filterRecipes } = useRecipeStore();

  // If you implemented a search query filter
  const filtered = filterRecipes ? filterRecipes(searchQuery) : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {filtered.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filtered.map((recipe) => (
            <li key={recipe.id}>
              {/* ✅ Use Link to navigate to details */}
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
