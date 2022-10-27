<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>{{ topCategory.name }}</XtxBreadItem>
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
import { computed, ref } from "vue";
import { findBanner } from "@/api/home";

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
</style>
