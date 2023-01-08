import { createApp } from "vue";
import App from "./App.vue";

// If you want to use ElTable, import it.
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/pagination/style/css";
import "element-plus/es/components/loading/style/css";

// ElLoading 指令必须手动注册下
import { ElLoading } from "element-plus";

import Table from "@pureadmin/table";

const app = createApp(App);
app.use(ElLoading).use(Table).mount("#app");
