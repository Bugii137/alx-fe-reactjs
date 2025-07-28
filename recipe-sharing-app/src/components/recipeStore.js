import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedRecipe } : r))
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  toggleFavorite: (id) => {
    const { favorites } = get();
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((fid) => fid !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  recommendedRecipes: () => {
    const { recipes } = get();
    return recipes.slice(0, 3); // Example: top 3 recipes
  },
}));

export default useRecipeStore;