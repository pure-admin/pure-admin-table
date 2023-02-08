# 按需导入示例

需要注意的是，[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 实现自动引入 `element-plus` 的方式，在结合 [@pureadmin/table](https://github.com/pure-admin/pure-admin-table) 使用时，需要手动引入 `ElTable`、`ElPagination`、`ElLoading` 样式并且需要手动注册下 `ElLoading`，代码如下

```ts
// main.ts
// If you want to use ElTable, import it.
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/pagination/style/css";
import "element-plus/es/components/loading/style/css";

// ElLoading 指令必须手动注册下
import { ElLoading } from "element-plus";

import Table from "@pureadmin/table";

const app = createApp(App);
app.use(ElLoading).use(Table).mount("#app");
```
