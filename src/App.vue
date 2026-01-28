<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRootStore } from '@/stores/root'
import { onMounted } from 'vue'

const rootStore = useRootStore()

onMounted(() => {
  rootStore.getAreas()
})
</script>

<template>
  <RouterView />
</template>
