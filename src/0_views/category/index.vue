<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <transition name="fade-right" mode="out-in">
          <XtxBreadItem :key="topCategory.id">{{
            topCategory.name
          }}</XtxBreadItem>
        </transition>
      </XtxBread>

      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height: 500px" />

      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in topCategory.children" :key="sub.id">
            <a href="javascript:;">
              <img :src="sub.picture" />
              <p>{{ sub.name }}</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 不同分类商品 -->
      <div class="ref-goods" v-for="sub in subList" :key="sub.id">
        <div class="head">
          <h3>- {{ sub.name }} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore :path="`/category/sub/${sub.id}`" />
        </div>
        <div class="body">
          <GoodsItem
            v-for="goods in sub.goods"
            :key="goods.id"
            :goods="goods"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCategory",
};
</script>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import { findBanner } from "@/api/home";
import { findTopCategory } from "@/api/category";
import GoodsItem from "./components/goods-item.vue";

// 轮播图
const sliders = ref([]);
findBanner().then((data) => {
  sliders.value = data.result;
});

// 面包屑 + 所有子分类
const store = useStore();
const route = useRoute();
const topCategory = computed(() => {
  let cate = {};
  const item = store.state.category.list.find((item) => {
    return item.id === route.params.id;
  });
  if (item) cate = item;
  return cate;
});

// 获取各个类目下的推荐商品
const subList = ref([]);
const getSubList = () => {
  findTopCategory(route.params.id).then((data) => {
    subList.value = data.result.children;
  });
};
watch(
  () => route.params.id,
  (newVal) => {
    // newVal && getSubList();
    if (newVal && `/category/${newVal}` === route.path) {
      getSubList();
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.top-category {
  h3 {
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    color: #666;
    font-weight: normal;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 32px;

      li {
        width: 168px;
        height: 160px;

        a {
          display: block;
          text-align: center;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
}

.ref-goods {
  position: relative;
  margin-top: 20px;
  background-color: #fff;

  .head {
    .xtx-more {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .tag {
      position: relative;
      top: -20px;
      text-align: center;
      color: #999;
      font-size: 20px;
    }
  }

  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}

.fade-right-enter-to,
.fade-right-leave-from {
  opacity: 1;
  transform: none;
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
}

.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
</style>
