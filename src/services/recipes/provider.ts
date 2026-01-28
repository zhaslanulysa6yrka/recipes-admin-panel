import { SEARCH_MEALS_BY_LETTER_ENDPOINT } from '@/constants'
import axios from 'axios'

export const getRecipesByLetter = async () => {
  const data = await axios.get(SEARCH_MEALS_BY_LETTER_ENDPOINT)
  return data
}
