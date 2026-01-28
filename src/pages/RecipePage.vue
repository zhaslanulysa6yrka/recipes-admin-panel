<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { RecipeService } from '@/services'

const route = useRoute()
const recipeId = route.params.id
const recipe = ref(RecipeService.getEmptyRecipe())
const isCreatingMode = ref(true)

const fetchRecipe = async () => {
  try {
    recipe.value = await RecipeService.getRecipeById(recipeId as string)
    isCreatingMode.value = false
  } catch (error) {
    console.error('Error fetching recipe:', error)
  }
}

onMounted(() => {
  if (parseInt(recipeId as string)) {
    fetchRecipe()
  }
})
</script>

<template>
  <AppLayout>
    <template #title>{{ isCreatingMode ? 'New Recipe' : recipe.strMeal }}</template>
    <template #controls>
      <AppButton text="Add Recipe" />
    </template>
    <template #inner>
      {{ recipe }}
    </template>
  </AppLayout>
</template>
