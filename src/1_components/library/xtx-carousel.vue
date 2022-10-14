// 轮播图
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ fade: index === i }"
      >
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>

    <a href="javascript:;" class="carousel-btn prev"
      ><i class="iconfont icon-xiangzuojiantou"></i
    ></a>
    <a href="javascript:;" class="carousel-btn next"
      ><i class="iconfont icon-xiangyoujiantou"></i
    ></a>

    <div class="carousel-indicator">
      <span
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ active: index === i }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XtxCarousel",
};
</script>

<script setup>
import { ref } from "vue";

defineProps({
  sliders: {
    type: Array,
    default: () => [],
  },
});

// 默认显示的图片的索引
const index = ref(0);
</script>

<style scoped lang="scss">
.xtx-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 2;
      bottom: 20px;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      position: absolute;
      top: 228px;
      z-index: 2;
      width: 44px;
      height: 44px;
      line-height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      text-align: center;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
