import { URL_AREAS, URL_CATEGORIES, URL_INGREDIENTS } from '@/constants'
import axios from 'axios'

export const getAreas = async () => {
  const response = await axios.get(URL_AREAS)
  return response.data.meals
}

export const getCategories = async () => {
  const response = await axios.get(URL_CATEGORIES)
  return response.data.meals
}

export const getIngredients = async () => {
  const response = await axios.get(URL_INGREDIENTS)
  return response.data.meals
}
