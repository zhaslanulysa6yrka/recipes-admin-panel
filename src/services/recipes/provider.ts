import { SEARCH_MEALS_BY_LETTER_ENDPOINT, LOOKUP_MEAL_BY_ID_ENDPOINT } from '@/constants'
import axios from 'axios'

export const getRecipesByLetter = async () => {
  const response = await axios.get(SEARCH_MEALS_BY_LETTER_ENDPOINT)
  return response.data.meals
}

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${LOOKUP_MEAL_BY_ID_ENDPOINT}${id}`)
  return response.data.meals
}
