<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>

    <li
      v-for="item in list"
      :key="item.id"
      @mouseenter="show(item)"
      @mouseleave="hide(item)"
    >
      <RouterLink :to="`/category/${item.id}`" @click="hide(item)">{{
        item.name
      }}</RouterLink>
      <!-- 二级分类弹层 -->
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <RouterLink :to="`/category/sub/${sub.id}`" @click="hide(item)">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 分类列表
const list = computed(() => store.state.category.list);

// 控制二级分类的显示和隐藏
const show = (item) => {
  store.commit("category/show", item.id);
};
const hide = (item) => {
  store.commit("category/hide", item.id);
};
</script>

<style scoped lang="scss">
.app-header-nav {
  display: flex;
  position: relative;
  z-index: 998;
  width: 820px;
  padding-left: 40px;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    // 二级类目
    > .layer {
      // 控制二级类目的显示
      &.open {
        height: 132px;
        opacity: 1;
      }

      position: absolute;
      top: 56px;
      left: -200px;
      width: 1240px;
      height: 0;
      opacity: 0;
      overflow: hidden;
      box-shadow: 0 0 5px #ccc;
      background-color: #fff;
      transition: all 0.2s 0.1s;

      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 132px;
        padding: 0 70px;

        li {
          width: 110px;
          text-align: center;

          img {
            width: 60px;
            height: 60px;
          }

          p {
            padding-top: 10px;
          }

          &:hover {
            p {
              color: $xtxColor;
            }
          }
        }
      }
    }

    &:hover {
      > a {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }

      // > .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
</style>
