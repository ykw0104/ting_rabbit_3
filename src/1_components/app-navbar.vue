<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile && profile.token">
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-jurassic_user"></i>{{ profile.account }}
            </a>
          </li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-shouji"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { profile } = computed(() => store.state.user);
</script>

<style lang="scss" scoped>
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
// .app-topnav {
//   height: 53px;
//   background: rgb(51, 51, 51);

//   ul {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     height: 53px;

//     li {
//       a {
//         display: inline-block;
//         padding: 0 15px;
//         height: 14px;
//         line-height: 14px;
//         color: rgb(205, 205, 205);

//         &:hover {
//           color: #27ba9b;
//         }
//       }

//       ~ li {
//         a {
//           border-left: 2px solid #666;
//         }
//       }
//     }
//   }
// }
//
</style>
