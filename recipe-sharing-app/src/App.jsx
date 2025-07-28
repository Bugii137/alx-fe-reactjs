import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'; // if implemented

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* Optional */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
