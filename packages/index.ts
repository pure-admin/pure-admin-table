export type {
  Align,
  TableColumns,
  PureTableProps,
  PaginationProps,
  TableColumnScope
} from "./types";

import type { App } from "vue";
import Table from "./components/table";

export const PureTable = Object.assign(Table, {
  install: function (app: App) {
    app.component(Table.name, Table);
  }
});

export default PureTable;
