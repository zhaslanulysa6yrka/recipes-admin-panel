import { URL_RECIPES_BY_LETTER, URL_RECIPE_BY_ID } from '@/constants'
import axios from 'axios'

export const getRecipesByLetter = async () => {
  const response = await axios.get(URL_RECIPES_BY_LETTER)
  return response.data.meals
}

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${URL_RECIPE_BY_ID}${id}`)
  return response.data.meals[0]
}
