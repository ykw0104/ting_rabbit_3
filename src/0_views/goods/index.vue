<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem
          v-if="goods"
          :to="`/category/${goods.categories[1].id}`"
          >{{ goods.categories[1].name }}</XtxBreadItem
        >
        <XtxBreadItem
          v-if="goods"
          :to="`/category/sub/${goods.categories[0].id}`"
          >{{ goods.categories[0].name }}</XtxBreadItem
        >
        <XtxBreadItem v-if="goods">{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info"></div>

      <!-- 商品推荐 -->
      <GoodsRelevant v-if="goods" />

      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
          <!-- 注意事项 -->
          <div class="goods-warn"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XtxGoodsPage",
  components: { GoodsRelevant },
};
</script>

<script setup>
import GoodsRelevant from "./components/goods-relevant";
import { nextTick, ref, watch } from "vue";
import { findGoods } from "@/api/product";
import { useRoute } from "vue-router";

// 获取商品详情
const useGoods = () => {
  const goods = ref(null);
  const route = useRoute();

  watch(
    () => route.params.id,
    (newVal) => {
      if (newVal && `/product/${newVal}` === route.path) {
        findGoods(route.params.id).then((data) => {
          goods.value = null;
          nextTick(() => {
            goods.value = data.result;
          });
        });
      }
    },
    {
      immediate: true,
    }
  );

  return goods;
};

const goods = useGoods();
</script>

<style scoped lang="scss">
.goods-info {
  min-height: 600px;
  background: #fff;
}

.goods-footer {
  display: flex;
  margin-top: 20px;

  .goods-article {
    width: 940px;
    margin-right: 20px;
  }

  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;
}

.goods-warn {
  margin-top: 20px;
  min-height: 600px;
  background: #fff;
}
</style>
