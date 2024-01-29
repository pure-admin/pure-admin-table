import type { App } from "vue";
import Table from "./components/table";
import type { PureTableInstallOptions } from "./types";

import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/loading/style/css";
import "element-plus/es/components/pagination/style/css";

export const PureTable = Object.assign(Table, {
  install: (app: App, options?: PureTableInstallOptions) => {
    app.component(Table.name, Table);
    app.provide("locale", options ?? { locale: null, i18n: null, ssr: false });
  }
});

export default PureTable;

export type {
  TableColumnFilterPlacement,
  PureTableInstallOptions,
  TableColumnSortOrders,
  TableColumnSortable,
  TableColumnRenderer,
  TableColumnScope,
  TableColumnFixed,
  TableColumnType,
  PaginationProps,
  DefaultLanguage,
  PureTableProps,
  AdaptiveConfig,
  TranslatePair,
  LoadingConfig,
  TableColumns,
  TableColumn,
  TableProps,
  Language,
  Layout,
  Effect,
  Align,
  Size
} from "./types";
