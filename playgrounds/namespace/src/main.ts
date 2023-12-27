import { createApp } from "vue";
import App from "./App.vue";

import "./ep.scss";
import ElementPlus from "element-plus";

import PureTable from "@pureadmin/table";

const app = createApp(App);
app.use(ElementPlus).use(PureTable).mount("#app");
