<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
</script>

<template>
  <div class="root">
    <AppMenu />
    <main class="main">
      <header class="header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="controls">
          <slot name="controls"></slot>
        </div>
      </header>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.root {
  display: flex;

  .main {
    flex: 1;
    padding-top: 20px;
    padding-inline: 16px;

    .header {
      display: flex;
      justify-content: space-between;

      .title {
        color: $violet;
        font-size: 28px;
        font-weight: 700;
      }
    }
  }
}
</style>
