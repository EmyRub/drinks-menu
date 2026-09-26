import { StateCreator } from "zustand"
import { SearchFilter } from '../types/index';
import { FavoritesSliceType } from "./favoritesSlice";
import type { Categories, Drink, Drinks, Recipe } from "../types"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"

/**Aqui se recibe la petición de la API */
export type RecipesSliceType = {
    drinks: Drinks
    modal: boolean
    selectedRecipe: Recipe
    categories: Categories
    closeModal: () => void
    fetchCategories: () => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
}

// [].- No se esperan parámetros
export const createRecipesSlice: StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})