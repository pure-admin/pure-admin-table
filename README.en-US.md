<h1 align="center">@pureadmin/table</h1>
<p align="center">Secondary encapsulation of element-plus Table, providing flexible configuration items</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

English | [简体中文](./README.md)

[Preview](https://pure-admin.github.io/pure-admin-table/)  
[MoreExamples](https://pure-admin.github.io/vue-pure-admin/#/table/index?username=sso&roles=admin&accessToken=eyJhbGciOiJIUzUxMiJ9.admin)

## 🤔 Original intention of development

`element-plus` [Table](https://element-plus.org/en-US/component/table.html#table-column-attributes) `Table-column` attribute can only be written in the `<template></template>` template at present, which is not very flexible. If the table has enough `column`, the code is written and looks bloated, but `element-plus` [Virtualized Table](https://element-plus.org/en-US/component/table-v2.html) The configurability is very high. In order to maintain unity, I encapsulated `Table` twice and used `cellRenderer`, `headerRenderer` These two custom renderers, Built-in `Pagination` component that can be rendered by configuration, of course, there are some additional properties, let's explore together

## 🚀 Features

🦾 **High flexibility and strong typing**: Written using `TSX` syntax, with powerful type derivation prompts and flexible and convenient configuration  
⚡ **Completely tree-shakable**: Comes with `Tree-Shaking`, only packages imported code  
🫶 **Zero code intrusion**: Keep all properties, slots, events, and methods of `Element-Plus` [Table](https://element-plus.org/en-US/component/table.html) At the same time, it provides more flexible configuration, and also has built-in paging components and loading animations that can be rendered through configuration, as well as table adaptive content area height, etc. Of course [custom namespace](https://element-plus.org/en-US/guide/namespace.html) will not be affected in any way  
🌍 **Internationalization friendly**: Built-in three streamlined internationalization (Simplified Chinese: `zhCn`, Traditional Chinese: `zhTw`, English: `en`) support, providing three internationalization configuration methods to configure it More flexible and convenient. Of course, it can also be combined with [vue-i18n](https://vue-i18n.intlify.dev/) to make the table adapt to international languages  
💚 **SSR friendly**: fully compatible with `Nuxt3`  
📡 **Can be referenced through `CDN`**: Supports both `jsdelivr` and `unpkg`

## 📦 Install

```bash
npm install @pureadmin/table
# or
yarn add @pureadmin/table
# or
pnpm add @pureadmin/table
```

## 📡 `CDN`

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@pureadmin/table/dist/style.css" />
<script src="//cdn.jsdelivr.net/npm/@pureadmin/table"></script>
<!-- or -->
<link rel="stylesheet" href="//unpkg.com/@pureadmin/table/dist/style.css" />
<script src="//unpkg.com/@pureadmin/table"></script>
```

## ⚙️ Usage

### Partial registration (single file)

```ts
import "@pureadmin/table/dist/style.css";
import { PureTable } from "@pureadmin/table";

<pure-table :data="dataList" :columns="columns" :pagination="pagination"></pure-table>
```

### Global registration (main.ts)

```ts
import { createApp } from "vue";
import App from "./App.vue";

import "@pureadmin/table/dist/style.css";
import PureTable from "@pureadmin/table";

const app = createApp(App);

app.use(PureTable).mount("#app");
```

[Click to view usage examples introduced by on-demand, global, namespace, `nuxt3` and `Html` files](https://github.com/pure-admin/pure-admin-table/tree/main/playgrounds)

## 🔮 Volar support

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
