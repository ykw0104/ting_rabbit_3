import { createRouter, createWebHashHistory } from "vue-router";

const Layout = () => import("@/0_views/Layout");
// 首页
const Home = () => import("@/0_views/home");
// 一级分类
const TopCategory = () => import("@/0_views/category");
// 二级分类
const SubCategory = () => import("@/0_views/category/sub");

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        redirect: {
          name: "Home",
        },
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/category/:id",
        name: "TopCategory",
        component: TopCategory,
      },
      {
        path: "/category/sub/:id",
        name: "SubCategory",
        component: SubCategory,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 切换路由时滚动到页面页面顶部
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
