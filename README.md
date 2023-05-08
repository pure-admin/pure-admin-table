<h1 align="center">@pureadmin/table</h1>
<p align="center">二次封装element-plus的Table，提供灵活的配置项</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.en-US.md)

[预览地址](https://pure-admin.github.io/pure-admin-table/)  
[更多示例](https://yiming_chang.gitee.io/vue-pure-admin/#/pure-table/index?username=sso&roles=admin&accessToken=eyJhbGciOiJIUzUxMiJ9.admin)

## 🤔 开发初衷

`element-plus` [Table](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) 的`Table-column`属性目前只能写在`<template></template>`模版里，这样不是很灵活，如果表格的`column`足够多，代码写、看起来很臃肿，但`element-plus` [Virtualized Table](https://element-plus.org/zh-CN/component/table-v2.html) 可配置性就很高，为了保持统一，我将`Table`二次封装并沿用了`cellRenderer`、`headerRenderer`这两个自定义 renderer，内置了可通过配置渲染的分页组件，当然还有一些额外的属性，让我们一起探索吧

## 🚀 特性

🦾 **灵活度高**: 使用`tsx`语法编写，保证类型的同时，给开发者提供了更灵活的写法，给使用者提供了更方便的配置  
⚡ **完全可摇树**: 自带 Tree-shaking，只对引入的代码进行打包  
🫶 **代码零侵入**: 保持`element-plus` [Table](https://element-plus.org/zh-CN/component/table.html) 的所有属性、插槽、事件、方法的同时，提供更灵活的配置，而且还内置了可通过配置渲染的分页组件  
⚓ **代码提交前校验**: 使用 [husky](https://typicode.github.io/husky/#/) 对提交代码前进行规则校验，强制规范开发流程，防止开发失误

## 📦 安装

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

## 🦄 用法

### 局部注册（单文件）

```ts
import { PureTable } from "@pureadmin/table";

<pure-table :data="dataList" :columns="columns" :pagination="pagination"></pure-table>
```

### 全局注册（main.ts）

```ts
import { createApp } from "vue";
import App from "./App.vue";

import Table from "@pureadmin/table";

const app = createApp(App);

app.use(Table).mount("#app");
```

[点击查看按需、全局以及 Html 文件引入的用法](https://github.com/pure-admin/pure-admin-table/tree/main/playgrounds)

## Volar 支持

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
