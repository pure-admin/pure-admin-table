# Changelog

## 3.2.1 (2024-08-31)

### 🐞 Bug fixes

- 修复多级表头使用 `headerRenderer` 无效的问题

## 3.2.0 (2024-08-12)

### ✔️ refactor

- 兼容 `element-plus` 最新版 `v2.8.0`，适配 `el-pagination` 新增的 `size` 属性，使用 `pagination.size` 替换表格 `paginationSmall` 属性

## 3.1.0 (2024-03-01)

### ✔️ refactor

- 使用 `tableKey` 替换表格拓展的 `key` 属性，防止和 `vue` 内部 `key` 属性产生命名冲突

### 🎫 Feat

- 表格的 `table-column` 新增过滤弹出框的类名 `filterClassName`
- 添加是否是服务端渲染 `ssr` 全局配置

### 🍏 Perf

- 分页样式优化

## 3.0.0 (2023-12-28)

### 🎫 Feat

- 添加自定义命名空间和`nuxt3`示例
- 提供表格整体所需的单独的`@pureadmin/table/dist/style.css`文件
- 提供内置国际化（简体中文：`zhCn`、繁体中文：`zhTw`、美国英语: `en`）支持，当然内置的国际化文件是精简后的，也就是只内置表格完整组成所需的国际化文件。

1. 权重最高，组件可传`locale`属性，代表国际化配置，可传`zhCn`、`zhTw`、`en`也可以自定义国际化，配置后会覆盖下面`2`、`3`方法；
2. 权重第二，使用`app.use`全局注册`PureTable`时，在第二个参数中可传两个可选属性，第一个属性`locale`代表国际化配置，可传`zhCn`、`zhTw`、`en`也可以自定义国际化，第二个属性`i18n`，需要配合`vue-i18n`，将`element-plus`的国际化文件配置到`vue-i18n`，统一传入`i18n`属性中后`@pureadmin/table`就会根据当前语言环境自适应表格国际化，如下

```ts
app.use(PureTable, {
  locale: "zhCn",
  i18n // 如果配置了i18n，上面的locale就无需配置，它会根据当前语言环境自适应
});
```

3.权重最低，使用`element-plus`提供的 [ConfigProvider](https://element-plus.org/zh-CN/guide/i18n.html#configprovider) 在 `app.vue` 中配置全局的国际化，如果使用 `ConfigProvider`，就不要使用上面`2`方法了，因为`2`方法权重第二，使用后会覆盖`ConfigProvider`，也就是`ConfigProvider`对`PureTable`无效了

### 🍏 Perf

- 完全兼容`nuxt3`

### 🎫 types

- 优化类型

## 2.4.1 (2023-12-02)

### 🐞 Bug fixes

- 修复表格同时设置 `border` 和 `adaptive` 后，表头边框消失

## 2.4.0 (2023-11-11)

### 🎫 Feat

- 新增 `cdn` 示例静态页面在线地址 https://pure-admin.github.io/pure-admin-table/cdn.html

### 🐞 Bug fixes

- 修复 `cdn` 模式报错 `Uncaught ReferenceError: process is not defined`

## 2.3.4 (2023-10-20)

### 🐞 Bug fixes

- 修复 `Cannot find type definition file for '@pureadmin/table/volar'` 警告

## 2.3.3 (2023-08-05)

### 🐞 Bug fixes

- 修复表格 `loadingConfig` 属性中 `background` 配置无效的问题

## 2.3.2 (2023-06-09)

### 🍏 Perf

- 优化 `setAdaptive` 和 `setHeaderSticky` 方法，确保在 `DOM` 更新后执行

## 2.3.1 (2023-06-09)

### 🎫 types

- 导出 `AdaptiveConfig` 类型

## 2.3.0 (2023-06-09)

### 🎫 Feat

- 新增 `adaptive` 表格属性，支持表格自适应内容区高度
- 新增 `adaptiveConfig` 表格属性，自适应内容区高度相关配置（`offsetBottom`：表格距离页面底部的偏移量，默认值为 `96`、`fixHeader`：是否固定表头，默认值为 `true`、`timeout`：页面 `resize` 时的防抖时间，默认值为 `60` ms、`zIndex`：表头的 `z-index`，默认值为 `100`）
- 新增并暴露出 `setAdaptive` 方法，可以设置表格自适应高度（用于表格外的元素高度改变或者元素隐藏时主动对表格进行自适应高度调整）
- 新增并暴露出 `setHeaderSticky` 方法，可以设置表头为 `sticky` 布局

### 🐞 Bug fixes

- 修复设置表格属性 `table-layout="auto"` 后，表头不会固定的问题

## 2.2.0 (2023-05-20)

### 🎫 Feat

- 添加自定义表头的内容插槽 `headerSlot`，可在 `template` 中使用

## 2.1.0 (2023-05-08)

### 🎫 Feat

- `TableColumns` 中 `hide` 属性支持 `Boolean` 类型

### 🍏 Perf

- 适配 `el-table` 新增的 `tooltipOptions` 属性

## 2.0.0 (2023-01-08)

### ✔️ refactor

- 分页事件名变更 `size-change` 变更为 `page-size-change`、`current-change` 变更为 `page-current-change`

## 1.9.0 (2022-12-09)

### 🍏 Perf

- 优化表格渲染

## 1.8.3 (2022-12-04)

### 🎫 Feat

- 添加 `loading`、`loadingConfig` 表格属性，可配置自定义加载动画，加载动画已适配暗黑模式

## 1.8.0 (2022-11-24)

### 🎫 Feat

- 新增表格 `key` 属性，唯一键，如果单个页面有多个表格实例，但是您只获取到一个表格实例，设置 `key` 即可解决，不过大多数情况下不需要设置，会自动处理
- 新增表格 `rowHoverBgColor` 属性，鼠标经过行时，行的背景色，默认 `--el-table-row-hover-bg-color`，具体看 [theme-chalk/src/table.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/table.scss#L607-L611)

## 1.7.0 (2022-11-23)

### 🎫 Feat

- `TableColumn` 的 `prop` 支持传函数，用于动态改变 `prop`，应用场景：列拖拽

## 1.5.0 (2022-11-20)

### 🎫 Feat

- 支持多级表头（表头分组），`columns` 中传 `children` 即可

### 🐞 Bug fixes

- 表格传 `alignWhole` 替换 `align` 属性，`@pureadmin/table` 的 `align` 属性跟 `element-plus table` 的 `align` 属性有突出，注意这个 `align` 不是 `columns` 里的，而是全局的

### ⛽️ types

- 完善类型

## 1.3.0 (2022-11-19)

### ⛽️ types

- types: supplement type

## 1.2.0 (2022-07-02)

### 🎫 Feat

- add `vitest` unit test

### 🐞 Bug fixes

- fix table `append` and `empty` slot

## 1.1.0 (2022-06-26)

### 🎫 Feat

- add `pagination` component

### 🍏 Perf

- types files

## 0.0.1 (2022-06-22)

### 🎫 Feat

- add `columns`、`align`、`headerAlign`、`showOverflowTooltip` 、`hide` 、`cellRenderer`、`headerRenderer`、`slot` props, on the basis of maintaining the table attribute in `element-plus`
