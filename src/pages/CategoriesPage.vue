<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <AppLayout>
    <template #title>Categories</template>
    <template #controls>
      <AppButton text="Add Category" />
    </template>
    <template #inner></template>
  </AppLayout>
</template>
