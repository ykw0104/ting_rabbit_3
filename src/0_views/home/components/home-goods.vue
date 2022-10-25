<template>
  <div class="goods-item">
    <RouterLink to="/" class="image">
      <img v-lazy="goods.picture" alt="" />
    </RouterLink>
    <p class="name ellipsis-2">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeGoods",
};
</script>

<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="scss">
.goods-item {
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 300px;
  padding: 10px 30px;
  border: 1px solid transparent;
  transition: all 0.5s;

  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  p {
    margin-top: 6px;
    font-size: 16px;
    &.name {
      height: 44px;
    }
    &.desc {
      color: #666;
      height: 22px;
    }
    &.price {
      margin-top: 10px;
      font-size: 20px;
      color: $priceColor;
    }
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 86px;
    width: 100%;
    background: $xtxColor;
    text-align: center;
    transform: translate3d(0, 100%, 0);
    transition: all 0.5s;

    span {
      display: block;
      width: 120px;
      line-height: 30px;
      margin: 0 auto;
      color: #fff;

      &:first-child {
        line-height: 40px;
        margin-top: 5px;
        font-size: 18px;
        border-bottom: 1px solid #fff;
      }
    }
  }

  &:hover {
    border-color: $xtxColor;
    .extra {
      transform: none;
    }
  }
}
</style>
