import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const isFavorite = useRecipeStore((state) => state.favorites.includes(parseInt(id)));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}

export default RecipeDetail;