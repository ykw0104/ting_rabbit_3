// 顶部吸顶
<template>
  <div class="app-header-sticky" :class="{ show: y >= 78 }">
    <div class="container" v-show="y >= 78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";

import AppHeaderNav from "./app-header-nav";

export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },

  // setup() {
  //   // 记录Y轴卷去的高度
  //   const y = ref(0);
  //   // 页面滚动时监听
  //   onMounted(() => {
  //     window.onscroll = () => {
  //       const scrollTop = document.documentElement.scrollTop;
  //       y.value = scrollTop;
  //     };
  //   });

  //   return {
  //     y,
  //   };
  // },

  setup() {
    const { y } = useWindowScroll();

    return { y };
  },
};
</script>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    display: flex;
    text-align: center;
    width: 220px;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>
