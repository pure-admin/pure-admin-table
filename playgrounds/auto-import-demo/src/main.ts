import { createApp } from "vue";
import App from "./App.vue";

import "@pureadmin/table/dist/style.css";
import PureTable from "@pureadmin/table";

const app = createApp(App);
app.use(PureTable).mount("#app");
