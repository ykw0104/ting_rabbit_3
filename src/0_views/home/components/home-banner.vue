<template>
  <div class="home-banner">
    <XtxCarousel />
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
};
</script>

<style scoped lang="scss">
.home-banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  width: 1240px;
  height: 500px;
}

// 覆盖轮播图组件样式
.xtx-carousel {
  :deep(.carousel-btn.prev) {
    left: 270px;
  }

  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
