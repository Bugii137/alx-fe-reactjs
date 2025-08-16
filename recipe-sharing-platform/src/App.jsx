import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-md p-4 flex justify-between max-w-6xl mx-auto rounded-b-2xl mb-6">
          <Link to="/" className="text-xl font-bold text-blue-500">
            Recipe Sharing
          </Link>
          <Link
            to="/add"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Recipe
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
