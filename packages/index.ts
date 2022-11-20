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
} from "./types";

import type { App } from "vue";
import Table from "./components/table";

export const PureTable = Object.assign(Table, {
  install: function (app: App) {
    app.component(Table.name, Table);
  }
});

export default PureTable;
