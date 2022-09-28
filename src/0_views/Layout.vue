<template>
  <!-- 顶部 -->
  <AppNavbar></AppNavbar>

  <!-- 头部 -->
  <AppHeader></AppHeader>

  <!-- 内容 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </div>

  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<script setup>
import AppNavbar from "@/1_components/app-navbar.vue";
import AppHeader from "@/1_components/app-header.vue";
import AppFooter from "@/1_components/app-footer.vue";
</script>

<style lang="scss" scoped>
.app-body {
  min-height: 600px;
}
</style>
