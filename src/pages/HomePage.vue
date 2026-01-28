<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'

import { RecipesService } from '@/services'

const recipes = ref([])

const fetchRecipes = async () => {
  try {
    const response = await RecipesService.getRecipesByLetter()
    recipes.value = response.data.meals
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
    <template #inner>
      <el-table :data="recipes" style="width: 100%">
        <el-table-column prop="idMeal" label="Id" />
        <el-table-column label="Image">
          <template #default="{ row }">
            <img :src="row.strMealThumb" alt="Meal Image" class="image" />
          </template>
        </el-table-column>
        <el-table-column prop="strMeal" label="Name" />
        <el-table-column prop="strArea" label="Area" />
        <el-table-column prop="strCategory" label="Category" />
        <el-table-column label="Tags">
          <template #default="{ row }">
            <el-tag v-for="tag in row.strTags?.split(',')" :key="tag" type="primary" class="tag">
              {{ tag }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </AppLayout>
</template>

<style scoped>
.image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.tag:not(:last-child) {
  margin-right: 4px;
  margin-bottom: 4px;
}
</style>
