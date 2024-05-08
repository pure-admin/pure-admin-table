<h1 align="center">@pureadmin/table</h1>
<p align="center">二次封装element-plus的Table，提供灵活的配置项</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.en-US.md)

[预览地址](https://pure-admin.github.io/pure-admin-table/)  
[更多示例，基本所有的用法这里都有](https://pure-admin.github.io/vue-pure-admin/#/table/index?username=sso&roles=admin&accessToken=eyJhbGciOiJIUzUxMiJ9.admin)

## 🤔 开发初衷

`element-plus` [Table](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) 的`Table-column`属性目前只能写在`<template></template>`模版里，这样不是很灵活，如果表格的`column`足够多，代码写、看起来很臃肿，但`element-plus` [Virtualized Table](https://element-plus.org/zh-CN/component/table-v2.html) 可配置性就很高，为了保持统一，我将`Table`二次封装并沿用了`cellRenderer`、`headerRenderer`这两个自定义渲染器，内置了可通过配置渲染的分页组件，当然还有一些额外的属性，让我们一起探索吧

## 🚀 特性

🦾 **灵活度高、强类型**: 使用`TSX`语法编写，拥有强大的类型推导提示和灵活、方便的配置  
⚡ **完全可摇树**: 自带`Tree-Shaking`，只对引入的代码进行打包  
🫶 **代码零侵入**: 保持`Element-Plus` [Table](https://element-plus.org/zh-CN/component/table.html) 的所有属性、插槽、事件、方法的同时，提供更灵活的配置，而且还内置了可通过配置渲染的分页组件和加载动画以及表格自适应内容区高度等，当然 [自定义命名空间](https://element-plus.org/zh-CN/guide/namespace.html) 也不会受到任何影响  
🌍 **国际化友好**: 内置三种精简的国际化（简体中文：`zhCn`、繁体中文：`zhTw`、英语: `en`），提供三种国际化配置方法，使其配置更灵活、方便。当然也可以结合 [vue-i18n](https://vue-i18n.intlify.dev/) ，让表格自适应国际化语言  
💚 **SSR友好**: 完全兼容`Nuxt3`  
📡 **可通过`CDN`引用**: 同时支持`jsdelivr`和`unpkg`

## 📦 安装

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

## ⚙️ 用法

### 局部注册（单文件）

```ts
import "@pureadmin/table/dist/style.css";
import { PureTable } from "@pureadmin/table";

<pure-table locale="zhCn" :data="dataList" :columns="columns" :pagination="pagination"></pure-table>
```

### 全局注册（main.ts）

```ts
import { createApp } from "vue";
import App from "./App.vue";

import "@pureadmin/table/dist/style.css";
import PureTable from "@pureadmin/table";

const app = createApp(App);

app.use(PureTable, { locale: "zhCn" }).mount("#app");
```

[点击查看按需、全局、自定义命名空间、`nuxt3`以及`Html`文件引入的用法示例](https://github.com/pure-admin/pure-admin-table/tree/main/playgrounds)

## 🔮 `Volar`支持

如果您在使用 `Volar`，那么可以在 `tsconfig.json` 中配置 `compilerOptions.types` 来指定全局组件类型（尤其是全局注册时要想获得类型提示就需要加上下面配置）

```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@pureadmin/table/volar"]
  }
}
```

## 许可证

[MIT © 2022-present, pure-admin](./LICENSE)
