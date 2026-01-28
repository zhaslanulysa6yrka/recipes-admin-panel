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
  padding: 20px 24px;
  border-radius: 4px;
  border: none;
  background-color: $violet;
  transition-duration: 0.2s;

  &:hover {
    background-color: $pink;
  }
}
</style>
