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
        <ul>
          <li v-for="goods in goodsList" :key="goods.id">
            <GoodsItem :goods="goods" />
          </li>
        </ul>

        <!-- 加载 -->
        <XtxInfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinite="getData"
        />
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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import SubBread from "./components/sub-bread.vue";
import SubFilter from "./components/sub-filter";
import SubSort from "./components/sub-sort";
import GoodsItem from "./components/goods-item";
import { findSubCategoryGoods } from "@/api/category";

const route = useRoute();

// 加载中
const loading = ref(false);
const finished = ref(false);
const goodsList = ref([]);
// 查询参数
let reqParams = {
  page: 1,
  pageSize: 20,
};

const getData = () => {
  loading.value = true;

  // 二级分类的ID
  reqParams.categoryId = route.params.id;
  findSubCategoryGoods(reqParams).then(({ result }) => {
    if (result.items.length) {
      goodsList.value.push(...result.items);
      reqParams.page++;
    } else {
      // 没有数据,加载完成
      finished.value = true;
    }

    loading.value = false;
  });
};

watch(
  () => route.params.id,
  (newVal) => {
    if (newVal && `/category/sub/${newVal}` === route.path) {
      finished.value = false;
      goodsList.value = [];
      reqParams = {
        page: 1,
        pageSize: 20,
      };
    }
  }
);
</script>

<style lang="scss" scoped>
.goods-list {
  padding: 0 25px;
  margin-top: 25px;
  background: #fff;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;

    li {
      margin-right: 20px;
      margin-bottom: 20px;

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
