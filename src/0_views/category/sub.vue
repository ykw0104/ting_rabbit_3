<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />

      <!-- 筛选区 -->
      <SubFilter />

      <!--  -->
      <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
};
</script>
<script setup>
import { ref } from "vue";
import SubBread from "./components/sub-bread.vue";
import SubFilter from "./components/sub-filter";

const isAllChecked = ref(true);
</script>

<style lang="scss" scoped></style>
