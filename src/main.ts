import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import Table from "../dist/index.es";

const app = createApp(App);

app.use(ElementPlus);
// app.use(ElementPlus).use(Table);
app.mount("#app");
