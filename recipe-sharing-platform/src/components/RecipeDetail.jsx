import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cooking Steps</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.steps.map((step, idx) => (
            <li key={idx} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
