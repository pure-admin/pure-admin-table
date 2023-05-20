import type { TableColumnCtx } from "element-plus";
import { PureTableProps, Align } from "./index";
import type { VNode } from "vue";

export type TableColumnSortOrders = "ascending" | "descending" | null;
export type TableColumnType = "selection" | "index" | "expand";
export type TableColumnSortable = false | true | "custom";
export type TableColumnFixed = true | "left" | "right";
export type TableColumnFilterPlacement =
  | "top-start"
  | "top-end"
  | "top"
  | "bottom-start"
  | "bottom-end"
  | "bottom"
  | "left-start"
  | "left-end"
  | "left"
  | "right-start"
  | "right-end"
  | "right";

type FilterMethods = (value, row: any, column: TableColumnCtx<any>) => void;

type RH = { column: TableColumnCtx<any>; $index: number };

export interface TableColumnScope {
  row?: any;
  column: TableColumn;
  $index: number;
}

export interface TableColumnRenderer extends TableColumnScope {
  index: number;
  props: PureTableProps;
  attrs: any;
}

/**
 * @description `element-plus` 的 `table` 中 `Table-column` 属性，未扩展
 * @see {@link https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7}
 */
export type TableColumn = {
  /** 显示的标题 */
  label?: string;
  /** 字段名称，对应列内容的字段名，也可以使用 `property` 属性 */
  prop?: string | ((index: number) => string);
  /** 对应列的类型，如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 `1` 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 */
  type?: TableColumnType;
  /** 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引 */
  index?: number | ((index: number) => number);
  /** `column` 的 `key`， 如果需要使用 `filter-change` 事件，则需要此属性标识是哪个 `column` 的筛选条件 */
  columnKey?: string;
  /** 对应列的宽度 */
  width?: string | number;
  /** 对应列的最小宽度，对应列的最小宽度，与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列 */
  minWidth?: string | number;
  /** 列是否固定在左侧或者右侧。`true` 表示固定在左侧 */
  fixed?: TableColumnFixed;
  /** 列标题 `Label` 区域渲染使用的 `Function` */
  renderHeader?: (data: RH) => VNode;
  /** 对应列是否可以排序， 如果设置为 `'custom'`，则代表用户希望远程排序，需要监听 `Table` 的 `sort-change `事件，默认值为 `false` */
  sortable?: TableColumnSortable;
  /** 指定数据按照哪个属性进行排序，仅当 `sortable` 设置为 `true` 的时候有效。应该如同 `Array.sort` 那样返回一个 `Number` */
  sortMethod?: (a: any, b: any) => number;
  /** 指定数据按照哪个属性进行排序，仅当 `sortable` 设置为 `true` 且没有设置 `sort-method` 的时候有效。如果 `sort-by` 为数组，则先按照第 `1` 个属性排序，如果第 `1` 个相等，再按照第 `2` 个排序，以此类推 */
  sortBy?: string | ((row: any, index: number) => string) | string[];
  /** 数据在排序时所使用排序策略的轮转顺序，仅当 `sortable` 为 `true` 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序，默认值为 `['ascending', 'descending', null]` */
  sortOrders?: Array<TableColumnSortOrders>;
  /** 对应列是否可以通过拖动改变宽度（需要在 `el-table` 上设置 `border` 属性为真），默认值为 `true`  */
  resizable?: boolean;
  /** 用来格式化内容 */
  formatter?: (
    row: any,
    column: TableColumnCtx<any>,
    cellValue,
    index: number
  ) => VNode | string;
  /** 当内容过长被隐藏时显示 `tooltip`，默认值为 `false` */
  showOverflowTooltip?: boolean;
  /** 对齐方式，默认值为 `left` */
  align?: Align;
  /** 表头对齐方式，若不设置该项，则使用表格的对齐方式 */
  headerAlign?: Align;
  /** 列的 `className` */
  className?: string;
  /** 当前列标题的自定义类名 */
  labelClassName?: string;
  /** 仅对 `type=selection` 的列有效，类型为 `Function`，`Function` 的返回值用来决定这一行的 `CheckBox` 是否可以勾选 */
  selectable?: (row: any, index: number) => boolean;
  /** 仅对 `type=selection` 的列有效，请注意，需指定 `row-key` 来让这个功能生效，默认值为 `false` */
  reserveSelection?: boolean;
  /** 数据过滤的选项，数组格式，数组中的元素需要有 `text` 和 `value` 属性。数组中的每个元素都需要有 `text` 和 `value` 属性 */
  filters?: Array<{ text: string; value: string }>;
  /** 过滤弹出框的定位 */
  filterPlacement?: TableColumnFilterPlacement;
  /** 数据过滤的选项是否多选，默认值为 `true` */
  filterMultiple?: boolean;
  /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 `true` 就会显示 */
  filterMethod?: FilterMethods;
  /** 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性 */
  filteredValue?: Array<any>;
};

/**
 * @description `element-plus` 的 `table` 中 `Table-column` 属性，已扩展，额外增加 `hide` 、`slot` 、`cellRenderer` 、`headerRenderer` 四个属性
 * @see {@link https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7}
 */
export interface TableColumns extends TableColumn {
  /** 是否隐藏 */
  hide?: boolean | CallableFunction;
  /** 自定义列的内容插槽 */
  slot?: string;
  /** 自定义表头的内容插槽 */
  headerSlot?: string;
  /** 多级表头，内部实现原理：嵌套 `el-table-column` */
  children?: Array<TableColumns>;
  /** 自定义单元格渲染器（`jsx`语法） */
  cellRenderer?: (data: TableColumnRenderer) => VNode;
  /** 自定义头部渲染器（`jsx`语法） */
  headerRenderer?: (data: TableColumnRenderer) => VNode;
}
