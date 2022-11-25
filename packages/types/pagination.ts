import type { CSSProperties } from "vue";
import { Align } from "./index";

/**
 * @description 分页相关配置。注意：`pageSize`、`total`、`currentPage` 这三个属性必传
 * @see {@link https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7}
 */
export type PaginationProps = {
  /** 是否使用小型分页样式，默认值：`false` */
  small?: boolean;
  /** 是否为分页按钮添加背景色，默认值：`false` */
  background?: boolean;
  /** 每页显示条目个数，默认值 `5` `该属性为必填属性` */
  pageSize: number;
  /** 每页显示条目数的初始值 */
  defaultPageSize?: number;
  /** 总条目数，默认值 `0` `该属性为必填属性` */
  total: number;
  /** 总页数 `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性 */
  pageCount?: number;
  /** 设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠 */
  pagerCount?: number;
  /** 当前页数 `该属性为必填属性` */
  currentPage: number;
  /** 当前页数的初始值 */
  defaultCurrentPage?: number;
  /** 组件布局，子组件名用逗号分隔，默认值 `"total, sizes, prev, pager, next, jumper"` */
  layout?: string;
  /** 每页显示个数选择器的选项设置，默认值 `[5, 10, 15, 20]` */
  pageSizes?: number[];
  /** 每页显示个数选择器的下拉框类名 */
  popperClass?: string;
  /** 替代图标显示的上一页文字 */
  prevText?: string;
  /** 替代图标显示的下一页文字 */
  nextText?: string;
  /** 是否禁用分页，默认值：`false` */
  disabled?: boolean;
  /** 只有一页时是否隐藏 */
  hideOnSinglePage?: boolean;
  /** 分页的对齐方式，默认值：`right` */
  align?: Align;
  /** 自定义分页样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  class?: string;
};
