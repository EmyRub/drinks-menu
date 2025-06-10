import api from "../lib/axios";
import { Drink, SearchFilter } from "../types";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";

export async function getCategories() {

    const url = '/list.php?c=list'
    const { data } = await api(url)

    //Validar con ZOD
    const result = CategoriesAPIResponseSchema.safeParse(data)

    if (result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await api(url)
    const result = DrinksAPIResponse.safeParse(data)

    if (result.success) {
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `/lookup.php?i=${id}`
    const { data } = await api(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

    if (result.success) {
        return result.data
    }

}