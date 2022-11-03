<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filterData && !fileterLoading">
    <!-- 第一行的品牌 -->
    <div class="item">
      <div class="head">品牌：</div>
      <div class="sub-body">
        <a
          :class="{ active: item.id === filterData.brands.selectBrand }"
          href="javascript:;"
          v-for="item in filterData.brands"
          :key="item.id"
          @click="filterData.brands.selectBrand = item.id"
          >{{ item.name }}
        </a>
      </div>
    </div>

    <!-- 其他行的属性-->
    <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="sub-body">
        <a
          :class="{ active: prop.id === item.selectProp }"
          href="javascript:;"
          v-for="prop in item.properties"
          :key="prop.id"
          @click="item.selectProp = prop.id"
          >{{ prop.name }}</a
        >
      </div>
    </div>
  </div>

  <!-- 骨架屏 -->
  <div v-else class="sub-filter">
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
  </div>
</template>

<script>
export default {
  name: "SubFilter",
};
</script>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { findSubCategoryFilter } from "@/api/category";

const route = useRoute();
const filterData = ref(null);
const fileterLoading = ref(false);
watch(
  () => route.params.id,
  (newVal) => {
    if (newVal && `/category/sub/${newVal}` === route.path) {
      fileterLoading.value = true;

      findSubCategoryFilter(route.params.id).then((data) => {
        // 品牌
        data.result.brands.selectBrand = null;
        data.result.brands.unshift({
          id: null,
          name: "全部",
        });

        // 属性
        data.result.saleProperties.forEach((item) => {
          item.selectProp = null;
          item.properties.unshift({ id: null, name: "全部" });
        });

        filterData.value = data.result;
        fileterLoading.value = false;
      });
    }
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
// 筛选区
.sub-filter {
  padding: 25px;
  background: #fff;

  .item {
    display: flex;
    line-height: 40px;

    .head {
      width: 80px;
      color: #999;
    }

    .sub-body {
      flex: 1;

      a {
        display: inline-block;
        margin-right: 36px;
        transition: all 0.3s;

        &.active,
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }

  .xtx-skeleton {
    padding: 10px 0;
  }
}
</style>
