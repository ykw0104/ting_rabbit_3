import { createApp } from "vue";
import App from "./App.vue";
import router from "./2_router";
import store from "./3_store";

// 重置样式
import "normalize.css";
import "@/assets/styles/common.scss";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
