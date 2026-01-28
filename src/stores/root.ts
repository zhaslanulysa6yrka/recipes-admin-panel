import { ref } from 'vue'
import { defineStore } from 'pinia'
import { CommonService } from '@/services'

interface Area {
  strArea: string
}

export const useRootStore = defineStore('root', () => {
  const areas = ref<Area[] | null>(null)
  const categories = ref(null)
  const ingredients = ref(null)

  const getAreas = async (): Promise<void> => {
    areas.value = await CommonService.getAreas()
  }

  const getCategories = async (): Promise<void> => {
    categories.value = await CommonService.getCategories()
  }

  const getIngredients = async (): Promise<void> => {
    ingredients.value = await CommonService.getIngredients()
  }

  return { areas, categories, ingredients, getAreas, getCategories, getIngredients }
})
