<script lang="ts" setup>
import { ROUTER_PATHS } from '@/constants'
import { useRoute } from 'vue-router'

const route = useRoute()

const isPathActive = (path: string): boolean => route.path === path
</script>

<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" />
    </div>
    <el-menu :router="true" class="nav el-menu-vertical-demo">
      <el-menu-item
        :index="ROUTER_PATHS.HOME"
        :class="['item', isPathActive(ROUTER_PATHS.HOME) && 'is-active']"
      >
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item
        :index="ROUTER_PATHS.CATEGORIES"
        :class="['item', isPathActive(ROUTER_PATHS.CATEGORIES) && 'is-active']"
      >
        <el-icon :size="24"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: 70px;
  height: 100vh;
  border-right: 1px solid $border;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 15px;
    border-bottom: 1px solid $border;
  }

  .nav {
    border: none;

    .item {
      color: $violet;

      &.is-active {
        color: $pink;
      }
    }
  }
}
</style>
