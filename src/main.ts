import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/dark/css-vars.scss";

import { useI18n, i18n } from "./i18n";

import PureTable from "../packages";

const app = createApp(App);

app.use(useI18n);
app.use(ElementPlus).use(PureTable, {
  i18n
});
app.mount("#app");
