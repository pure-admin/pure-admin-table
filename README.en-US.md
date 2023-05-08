<h1 align="center">@pureadmin/table</h1>
<p align="center">Secondary encapsulation of element-plus Table, providing flexible configuration items</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

English | [简体中文](./README.md)

[Preview](https://pure-admin.github.io/pure-admin-table/)  
[MoreExamples](https://yiming_chang.gitee.io/vue-pure-admin/#/pure-table/index?username=sso&roles=admin&accessToken=eyJhbGciOiJIUzUxMiJ9.admin)

## 🤔 Original intention of development

`element-plus` [Table](https://element-plus.org/en-US/component/table.html#table-column-attributes) `Table-column` attribute can only be written in the `<template></template>` template at present, which is not very flexible. If the table has enough `column`, the code is written and looks bloated, but `element-plus` [Virtualized Table](https://element-plus.org/en-US/component/table-v2.html) The configurability is very high. In order to maintain unity, I encapsulated `Table` twice and used `cellRenderer`, `headerRenderer` These two custom renderers, Built-in `Pagination` component that can be rendered by configuration, of course, there are some additional properties, let's explore together

## 🚀 Features

🦾 **High flexibility**: Written using `tsx` syntax, while ensuring the type, it provides developers with more flexible writing methods and provides users with more convenient configuration  
⚡ **Fully tree-shaking**: Comes with Tree-shaking, only packages the imported code  
🫶 **Code Zero Intrusion**: While keeping all `properties`, `slot`, `events` and `methods` of `element-plus` [Table](https://element-plus.org/en-US/component/table.html), Provides more flexible configuration, It also has built-in `Pagination` components that can be rendered by configuration  
⚓ **Verification before code submission**: Use [husky](https://typicode.github.io/husky/#/) to verify the rules before submitting code, enforce standard development process and prevent development mistakes

## 📦 Install

```bash
npm install @pureadmin/table
or
pnpm add @pureadmin/table
```

## 🕸️ `CDN`

```html
<script src="https://unpkg.com/@pureadmin/table"></script>
or
<script src="https://cdn.jsdelivr.net/npm/@pureadmin/table"></script>
```

## 🦄 Usage

### Partial registration (single file)

```ts
import { PureTable } from "@pureadmin/table";

<pure-table :data="dataList" :columns="columns" :pagination="pagination"></pure-table>
```

### Global registration (main.ts)

```ts
import { createApp } from "vue";
import App from "./App.vue";

import Table from "@pureadmin/table";

const app = createApp(App);

app.use(Table).mount("#app");
```

[Click to view the usage of on-demand, global and Html file import](https://github.com/pure-admin/pure-admin-table/tree/main/playgrounds)

## Volar support

If you are using `Volar`, you can configure `compilerOptions.types` in `tsconfig.json` to specify the global component type (especially if you want to get type hints when registering globally, you need to add the following configuration)

```js
// tsconfig.json
{
  "compilerOptions": {
    //...
    "types": ["@pureadmin/table/volar"]
  }
}
```

## License

[MIT © 2022-present, pure-admin](./LICENSE)
