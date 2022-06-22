<h1 align="center">@pureadmin/table</h1>
<p align="center">二次封装element-plus的Table，提供灵活的配置项</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.md)  

## 🤔 开发初衷

-  `element-plus` [Table](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) 的`Table-column`属性目前只能写在`<template></template>`模版里，这样不是很灵活，如果表格的`column`足够多，代码写、看起来很臃肿，但`element-plus` [Virtualized Table](https://element-plus.org/zh-CN/component/table-v2.html) 可配置性就很高，为了保持统一，我将`Table`二次封装并沿用了`cellRenderer`、`headerRenderer`这两个自定义renderer，当然还有一些额外的属性，让我们一起探索吧

## 🚀 特性

- 🦾 **灵活度高**: 使用`tsx`语法编写，保证类型的同时，给开发者提供了更灵活的写法，给使用者提供了更方便的配置
- ⚡ **完全可摇树**: 自带Tree-shaking，只对引入的代码进行打包
- 🫶 **代码零侵入**: 保持`element-plus` [Table](https://element-plus.org/zh-CN/component/table.html) 的所有属性、事件、方法的同时，提供更灵活的配置
- ⚓ **代码提交前校验**: 使用 [husky](https://typicode.github.io/husky/#/) 对提交代码前进行规则校验，强制规范开发流程，防止开发失误

## 📦 安装

```bash
npm install @pureadmin/table -D
or 
pnpm add @pureadmin/table -D
```

## 🦄 用法

```ts
import { PureTable } from "@pureadmin/table";

<pure-table :data="dataList" :columns="columns"></pure-table>
```

[点击查看具体用法](https://github.com/xiaoxian521/vue-pure-admin)

## 许可证

[MIT © xiaoxian521-2022](./LICENSE)