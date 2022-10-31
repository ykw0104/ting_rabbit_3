<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
};
</script>
<script setup>
import SubBread from "./components/sub-bread.vue";
</script>

<style lang="scss" scoped></style>
