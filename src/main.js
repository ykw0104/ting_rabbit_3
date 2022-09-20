import { createApp } from "vue";
import App from "./App.vue";
import router from "./2_router";
import store from "./3_store";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
