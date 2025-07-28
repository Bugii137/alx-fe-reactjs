// src/store/recipeStore.js
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: uuidv4() }],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),

  toggleFavorite: (id) =>
    set((state) => {
      const isFav = state.favorites.includes(id);
      return {
        favorites: isFav
          ? state.favorites.filter((fid) => fid !== id)
          : [...state.favorites, id],
      };
    }),

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
        r.ingredients?.some((ing) =>
          favIngredients.has(ing.toLowerCase())
        )
    );

    set({ recommendations });
  },
}));
