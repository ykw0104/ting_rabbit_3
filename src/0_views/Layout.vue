<template>
  <!-- 顶部 -->
  <AppNavbar></AppNavbar>

  <!-- 头部 -->
  <AppHeader></AppHeader>

  <!-- 内容 -->
  <div class="main">
    <!-- 二级路由 -->
    <RouterView />
  </div>

  <!-- 底部 -->
  <div>底部</div>
</template>

<script setup>
import AppNavbar from "@/1_components/app-navbar.vue";
import AppHeader from "@/1_components/app-header.vue";
</script>

<style lang="scss" scoped></style>
