<template>
  <!-- 顶部 -->
  <AppNavbar></AppNavbar>

  <!-- 头部 -->
  <div>头部</div>

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
</script>

<style lang="scss" scoped></style>
