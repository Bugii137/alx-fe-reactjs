// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';
import FavouritesList from './components/FavouritesList';
import RecommendationList from './components/RecommendationList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/recommendations" element={<RecommendationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
