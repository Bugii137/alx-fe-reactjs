// src/store/recipeStore.js
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Task 0: Required by the checker
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Task 0 & 1
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: uuidv4() }],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  editRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Task 3: Favorites handling
  toggleFavorite: (id) =>
    set((state) => {
      const isFav = state.favorites.includes(id);
      return {
        favorites: isFav
          ? state.favorites.filter((fid) => fid !== id)
          : [...state.favorites, id],
      };
    }),

  // Task 3: Personalized Recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));
    const favIngredients = new Set();

    favRecipes.forEach((recipe) => {
      recipe.ingredients?.forEach((ing) =>
        favIngredients.add(ing.toLowerCase())
      );
    });

    const recommendations = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        r.ingredients?.some((ing) => favIngredients.has(ing.toLowerCase()))
    );

    set({ recommendations });
  },
}));
