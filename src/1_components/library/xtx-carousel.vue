// 轮播图
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li class="carousel-item fade">
        <RouterLink to="/">
          <img
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
            alt=""
          />
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
      <span v-for="i in 5" :key="i"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XtxCarousel",
};
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
