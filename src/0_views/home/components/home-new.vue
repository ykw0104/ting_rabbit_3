<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>

      <div ref="target" style="position: relative; height: 406px">
        <Transition name="fade">
          <!-- 面板内容 -->
          <ul v-if="goods.length" ref="pannel" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" alt="" />
                <p class="name">{{ item.name }}</p>
                <p class="price">&yen;{{ item.price }}</p>
              </RouterLink>
            </li>
          </ul>

          <HomeSkeleton bg="#f0f9f4" v-else />
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
};
</script>

<script setup>
import { ref } from "vue";
import { findNew } from "@/api/home";
import HomePanel from "./home-panel";
import HomeSkeleton from "./home-skeleton.vue";
import { useLazyData } from "@/hooks";

// const goods = ref([]);
// findNew().then((data) => {
//   goods.value = data.result;
// });

const data = useLazyData(findNew);
const target = data.target;
const goods = data.result;
</script>
<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    @include hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: $priceColor;
    }
  }
}
</style>
