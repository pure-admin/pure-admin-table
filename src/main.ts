import App from "./App.vue";
import { createApp } from "vue";

import { useI18n, i18n } from "./i18n";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/dark/css-vars.scss";
import ElementPlus from "element-plus";

import PureTable from "../packages";

const app = createApp(App);

app
  .use(useI18n)
  .use(ElementPlus)
  .use(PureTable, {
    i18n
  })
  .mount("#app");
