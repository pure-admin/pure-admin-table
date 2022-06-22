<h1 align="center">@pureadmin/table</h1>
<p align="center">Secondary encapsulation of element-plus Table, providing flexible configuration items</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/table?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/table" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/table?color=50a36f&label="></a>
</p>

English | [简体中文](./README.zh_CN.md)

## 🤔 Original intention of development

- `element-plus` [Table](https://element-plus.org/en-US/component/table.html#table-column-attributes) `Table-column` attribute can only be written in the `<template></template>` template at present, which is not very flexible. If the table has enough `column`, the code is written and looks bloated, but `element-plus` [Virtualized Table](https://element-plus.org/en-US/component/table-v2.html) The configurability is very high. In order to maintain unity, I encapsulated `Table` twice and used `cellRenderer`, `headerRenderer` These two custom renderers, of course, there are some additional properties, let's explore together

## 🚀 Features

- 🦾 **High flexibility**: Written using `tsx` syntax, while ensuring the type, it provides developers with more flexible writing methods and provides users with more convenient configuration
- ⚡ **Fully tree-shaking**: Comes with Tree-shaking, only packages the imported code
- 🫶 **Code Zero Intrusion**: While keeping all properties, events and methods of `element-plus` [Table](https://element-plus.org/en-US/component/table.html), Provides more flexible configuration
- ⚓ **Verification before code submission**: Use [husky](https://typicode.github.io/husky/#/) to verify the rules before submitting code, enforce standard development process and prevent development mistakes

## 📦 Install

```bash
npm install @pureadmin/table -D
or 
pnpm add @pureadmin/table -D
```

## 🦄 Usage

```ts
import { PureTable } from "@pureadmin/table";

<pure-table :data="dataList" :columns="columns"></pure-table>
```

[Click to view the specific usage](https://github.com/xiaoxian521/vue-pure-admin)

## License

[MIT © xiaoxian521-2022](./LICENSE)