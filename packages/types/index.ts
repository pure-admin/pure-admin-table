import {
  TableColumnFilterPlacement,
  TableColumnSortOrders,
  TableColumnSortable,
  TableColumnRenderer,
  TableColumnFixed,
  TableColumnScope,
  TableColumnType,
  TableColumns,
  TableColumn
} from "./table-column";
import { TableProps, PureTableProps } from "./table-props";
import { PaginationProps } from "./pagination";

type Size = "large" | "default" | "small";
type Align = "left" | "center" | "right";
type Effect = "dark" | "light";
type Layout = "fixed" | "auto";

export type {
  TableColumnFilterPlacement,
  TableColumnSortOrders,
  TableColumnSortable,
  TableColumnRenderer,
  TableColumnScope,
  TableColumnFixed,
  TableColumnType,
  PaginationProps,
  PureTableProps,
  TableColumns,
  TableColumn,
  TableProps,
  Layout,
  Effect,
  Align,
  Size
};
