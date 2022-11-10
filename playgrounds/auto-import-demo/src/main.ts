import { createApp } from "vue";
import App from "./App.vue";

// If you want to use ElTable, import it.
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/pagination/style/css";

import Table from "@pureadmin/table";

const app = createApp(App);
app.use(Table).mount("#app");
