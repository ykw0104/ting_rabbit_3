// 首页左侧分类
<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <ul class="menu">
      <li
        :class="{ active: categoryId && categoryId === item.id }"
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="getCategoryId(item.id)"
      >
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
        <template v-else>
          <XtxSkeleton
            width="60px"
            height="16px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
            animated
          />
          <XtxSkeleton
            width="50px"
            height="16px"
            bg="rgba(255,255,255,0.2)"
            animated
          />
        </template>
      </li>
    </ul>

    <!-- 二级类目的弹层 -->
    <div class="layer">
      <h4>
        {{ currCategory && currCategory.id === "brand" ? "分类" : "品牌" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>

      <ul v-if="currCategory && currCategory.goods">
        <!-- 商品数据 -->
        <li v-for="item in currCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>

      <!-- 品牌数据 -->
      <ul v-if="currCategory && currCategory.brands">
        <li class="brand" v-for="brand in currCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" alt="" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ brand.place }}
              </p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { findBrand } from "@/api/home.js";

const store = useStore();

// 品牌数据
const brand = reactive({
  id: "brand",
  name: "品牌",
  children: [{ id: "brand-children", name: "品牌推荐" }],
  // 品牌列表
  brands: [],
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

// 获取每个类目的弹出层的商品数据
const categoryId = ref(null);
const getCategoryId = (id) => {
  categoryId.value = id;
};
const currCategory = computed(() => {
  return menuList.value.find((item) => item.id === categoryId.value);
});

// 获取品牌数据
findBrand().then((data) => {
  brand.brands = data.result;
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

      &:hover,
      &.active {
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

  .layer {
    display: none;
    position: absolute;
    left: 250px;
    top: 0;
    width: 990px;
    height: 500px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.8);

    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;

      small {
        font-size: 16px;
        color: #666;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px soid #eee;
        border-radius: 4px;
        background: #fff;

        &:nth-child(3n) {
          margin-right: 0;
        }

        a {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 10px;

          &:hover {
            background: #e3f9f4;
          }

          img {
            width: 95px;
            height: 95px;
          }

          .info {
            width: 190px;
            line-height: 24px;
            padding-left: 10px;

            .name {
              font-size: 16px;
              color: #666;
            }

            .desc {
              color: #999;
            }

            .price {
              font-size: 22px;
              color: $priceColor;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }

      li.brand {
        height: 180px;

        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }

  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
