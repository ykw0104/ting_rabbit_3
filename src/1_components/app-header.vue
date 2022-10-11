<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>

      <!-- 头部导航 -->
      <!-- <ul class="navs">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
      </ul> -->
      <AppHeaderNav />

      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜一搜" />
      </div>

      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-gouwuche" style="font-size: 20px"></i
          ><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppHeaderNav from "./app-header-nav.vue";
</script>

<style lang="scss" scoped>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }

  // .navs {
  //   display: flex;
  //   justify-content: space-around;
  //   width: 820px;
  //   padding-left: 40px;

  //   li {
  //     margin-right: 40px;
  //     width: 38px;
  //     text-align: center;

  //     a {
  //       display: inline-block;
  //       height: 32px;
  //       line-height: 32px;
  //       font-size: 16px;
  //     }

  //     &:hover {
  //       a {
  //         color: $xtxColor;
  //         border-bottom: 1px solid $xtxColor;
  //       }
  //     }
  //   }
  // }

  .search {
    position: relative;
    width: 170px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #e7e7e7;

    .icon-search {
      margin-left: 5px;
      font-size: 18px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      display: block;
      position: relative;
      height: 32px;
      line-height: 32px;
      text-align: center;

      .icon-cart {
        font-size: 22px;
      }

      em {
        position: absolute;
        right: 0;
        top: 0;
        font-style: normal;
        font-family: Arial;
        font-size: 12px;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
}
</style>
