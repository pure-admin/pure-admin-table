import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import PureTable from "@pureadmin/table";

const app = createApp(App);
app.use(ElementPlus).use(PureTable).mount("#app");
