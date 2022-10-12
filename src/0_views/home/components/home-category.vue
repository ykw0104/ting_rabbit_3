// 首页左侧分类
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id">
        <!-- 一级类目 -->
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

        <!-- 二级类目 -->
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
            >{{ sub.name }}</RouterLink
          >
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 品牌数据
const brand = reactive({
  id: "brand",
  name: "品牌",
  children: [{ id: "brand-children", name: "品牌推荐" }],
});
const menuList = computed(() => {
  // 9个一级类目和每个一级类目下的2个二级类目
  const list = store.state.category.list.map((item) => {
    return {
      id: item.id,
      name: item.name,
      children: item.children && item.children.slice(0, 2),
      goods: item.goods,
    };
  });

  // 追加一个品牌
  list.push(brand);

  return list;
});
</script>

<style scoped lang="scss">
.home-category {
  position: relative;
  width: 250px;
  height: 500px;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;

      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
