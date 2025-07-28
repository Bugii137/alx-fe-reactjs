// src/components/RecommendationList.jsx
import { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations(); // Run on mount
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommendations.map((r) => (
          <li key={r.id}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
