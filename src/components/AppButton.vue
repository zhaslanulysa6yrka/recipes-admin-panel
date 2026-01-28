<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <el-button type="primary" class="button">{{ text }}</el-button>
</template>

<style lang="scss" scoped>
.button {
  font-size: 17px;
  background-color: $violet;
  border-radius: 4px;
  padding: 20px 24px;
}
</style>
