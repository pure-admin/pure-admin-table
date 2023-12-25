import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/dark/css-vars.scss";
// import ru from "element-plus/es/locale/lang/ru";
// import en from "element-plus/dist/locale/en.mjs";
// import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import { useI18n, i18n } from "./i18n";

import PureTable from "../packages";

const app = createApp(App);

app.use(useI18n);
app.use(ElementPlus).use(PureTable, {
  locale: "zhCn",
  i18n
});
app.mount("#app");
