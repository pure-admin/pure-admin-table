## 按需导入示例

需要注意的是，[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 实现自动引入 `element-plus` 的方式，在结合 [@pureadmin/table](https://github.com/xiaoxian521/pure-admin-table) 使用时，需要手动引入 `ElTable` 样式，代码如下

```ts
// main.ts
import "element-plus/es/components/table/style/css"
```