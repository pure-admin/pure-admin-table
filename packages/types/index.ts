import {
  TableColumnType,
  TableColumnFixed,
  TableColumnSortable,
  TableColumnSortOrders,
  TableColumnFilterPlacement,
  TableColumnScope,
  TableColumnRenderer,
  TableColumn,
  TableColumns
} from "./table-column";
import { PaginationProps } from "./pagination";
import { TableProps, PureTableProps } from "./table-props";

type Align = "left" | "center" | "right";
type Size = "large" | "default" | "small";
type Effect = "dark" | "light";
type Layout = "fixed" | "auto";

export type {
  TableColumnType,
  TableColumnFixed,
  TableColumnSortable,
  TableColumnSortOrders,
  TableColumnFilterPlacement,
  TableColumnScope,
  TableColumnRenderer,
  TableColumn,
  TableColumns,
  PaginationProps,
  TableProps,
  PureTableProps,
  Align,
  Size,
  Effect,
  Layout
};
