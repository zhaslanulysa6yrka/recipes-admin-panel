<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <AppLayout>
    <template #title>Recipe</template>
    <template #controls>
      <AppButton text="Add Recipe" />
    </template>
    <template #inner></template>
  </AppLayout>
</template>
