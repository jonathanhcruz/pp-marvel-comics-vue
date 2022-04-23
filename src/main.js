import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hashApi from "./utils/hashApi";

const app = createApp(App);
app.config.globalProperties.$hashApi = hashApi;
app.use(store).use(router).mount("#app");
