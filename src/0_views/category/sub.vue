<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />

      <!-- 筛选区 -->
      <SubFilter />

      <!-- 商品面板 -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort />

        <!-- 列表 -->
      </div>
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
import SubSort from "./components/sub-sort";

const isAllChecked = ref(true);
</script>

<style lang="scss" scoped>
.goods-list {
  padding: 0 25px;
  margin-top: 25px;
  background: #fff;
}
</style>
