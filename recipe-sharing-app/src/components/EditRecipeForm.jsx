import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Required to pass the check

    updateRecipe(id, { title, description });
    navigate(`/recipes/${id}`);
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
