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
