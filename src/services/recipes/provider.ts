import { URL_RECIPES_BY_LETTER } from '@/constants'
import axios from 'axios'

export const getRecipesByLetter = async () => {
  const response = await axios.get(URL_RECIPES_BY_LETTER)
  return response.data.meals
}
