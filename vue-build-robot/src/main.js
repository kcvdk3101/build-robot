import "./assets/css/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import currencyFilter from "./utils/currency-filter";

const app = createApp(App);

app.use(router);
app.use(store);

app.config.globalProperties.$filters = {
  currencyUSD: currencyFilter,
};

app.mount("#app");
