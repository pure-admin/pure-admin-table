import { createApp } from "vue";
import App from "./App.vue";

import "./dark.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { useI18n } from "./i18n";

// import Table from "../dist/index.es";

const app = createApp(App);

app.use(useI18n);
app.use(ElementPlus);
// app.use(ElementPlus).use(Table);
app.mount("#app");
