<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'

import { RecipesService } from '@/services'

const recipes = ref([])

const fetchRecipes = async () => {
  try {
    const response = await RecipesService.getRecipesByLetter()
    recipes.value = response.data
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
}

onMounted(fetchRecipes)
</script>

<template>
  <AppLayout>
    <template #title>Рецепты</template>
    <template #controls>
      <AppButton text="Добавить рецепт" />
    </template>
  </AppLayout>
</template>
