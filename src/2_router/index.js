import { createRouter, createWebHashHistory } from "vue-router";

const Layout = () => import("@/0_views/Layout");
const Home = () => import("@/0_views/home");

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
        // 首页
        path: "home",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
