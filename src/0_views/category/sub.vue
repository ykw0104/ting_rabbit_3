<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />

      <!-- 筛选区 -->
      <SubFilter />
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
import SubFilter from "./components/sub-filter";
</script>

<style lang="scss" scoped></style>
