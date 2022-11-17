<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filterData && !fileterLoading">
    <!-- 第一行的品牌 -->
    <div class="item">
      <div class="head">品牌：</div>
      <div class="sub-body">
        <a
          :class="{ active: item.id === filterData.selectedBrand }"
          href="javascript:;"
          v-for="item in filterData.brands"
          :key="item.id"
          @click="changeBrand(item.id)"
          >{{ item.name }}
        </a>
      </div>
    </div>

    <!-- 其他行的属性-->
    <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="sub-body">
        <a
          :class="{ active: prop.id === item.selectedProp }"
          href="javascript:;"
          v-for="prop in item.properties"
          :key="prop.id"
          @click="changeProps(item, prop.id)"
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
import { isEmptyStatement } from "@babel/types";

const route = useRoute();
const emit = defineEmits(["filter-change"]);

const filterData = ref(null);
const fileterLoading = ref(false);
watch(
  () => route.params.id,
  (newVal) => {
    if (newVal && `/category/sub/${newVal}` === route.path) {
      fileterLoading.value = true;

      findSubCategoryFilter(route.params.id).then((data) => {
        // 品牌
        data.result.selectedBrand = null;
        data.result.brands.unshift({
          id: null,
          name: "全部",
        });

        // 属性
        data.result.saleProperties.forEach((item) => {
          item.selectedProp = null;
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

// 获取筛选参数
const getFilterParams = () => {
  const filterParams = {
    brandId: null,
    attrs: [],
  };
  // 品牌
  filterParams.brandId = filterData.value.selectedBrand;
  // 销售属性
  filterData.value.saleProperties.forEach((item) => {
    if (item.selectedProp) {
      const prop = item.properties.find(
        (prop) => prop.id === item.selectedProp
      );
      filterParams.attrs.push({
        groupName: item.name,
        propertyName: prop.name,
      });
    }
  });

  if (filterParams.attrs.length === 0) filterParams.attrs = null;

  return filterParams;
};

// 记录当前选择的品牌
const changeBrand = (brandId) => {
  if (filterData.value.selectedBrand === brandId) return;
  filterData.value.selectedBrand = brandId;
  emit("filter-change", getFilterParams());
};

// 记录选择的销售属性
const changeProps = (item, propId) => {
  if (item.selectedProp === propId) return;
  item.selectedProp = propId;
  emit("filter-change", getFilterParams());
};
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
