<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a
        @click="toggle(-1)"
        :class="{ disabled: index === 0 }"
        href="javascript:;"
        class="iconfont icon-xiangzuojiantou prev"
      ></a>
      <a
        @click="toggle(1)"
        :class="{ disabled: index === 1 }"
        href="javascript:;"
        class="iconfont icon-xiangyoujiantou next"
      ></a>
    </template>

    <div ref="target" class="box">
      <Transition name="fade">
        <ul
          v-if="brands.length"
          class="list"
          :style="{ transform: `translateX(${-index * 1240}px)` }"
        >
          <li v-for="item in brands" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>

        <div v-else class="skeleton">
          <XtxSkeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            width="240px"
            height="305px"
          />
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import { ref } from "vue";
import HomePanel from "./home-panel";
import { findBrand } from "@/api/home";
import { useLazyData } from "@/hooks";

export default {
  name: "HomeBrand",
  components: { HomePanel },

  setup() {
    // 获取数据
    // const brands = ref([]);
    // findBrand(10).then((data) => {
    //   brands.value = data.result;
    // });
    const { target, result } = useLazyData(() => findBrand(10));

    // 切换效果，前提只有 0 1 两页
    const index = ref(0);
    // 1. 点击上一页
    // 2. 点击下一页
    const toggle = (step) => {
      const newIndex = index.value + step;
      if (newIndex < 0 || newIndex > 1) return;
      index.value = newIndex;
    };

    return { brands: result, toggle, index, target };
  },
};
</script>

<style scoped lang="scss">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  text-align: center;
  background: #ccc;
  color: #fff;
  background: $xtxColor;

  &::before {
    position: relative;
    top: -2px;
    font-size: 12px;
  }

  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;

  .list {
    display: flex;
    width: 200%;
    transition: all 1s;

    li {
      margin-right: 10px;
      width: 240px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}

.skeleton {
  display: flex;
  width: 100%;

  .item {
    margin-right: 10px;

    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
</style>
