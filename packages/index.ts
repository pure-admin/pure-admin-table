export type {
  Align,
  PureTableProps,
  PaginationProps,
  TableColumnScope
} from "./types";

import { App } from "vue";

import Pagination from "./components/pagination";
import Table from "./components/table";

const PurePagination = Object.assign(Pagination, {
  install: function (app: App) {
    app.component(Pagination.name, Pagination);
  }
});
const PureTable = Object.assign(Table, {
  install: function (app: App) {
    app.component(Table.name, Table);
  }
});

const components = [PurePagination, PureTable];
function install(app: App<any>) {
  components.forEach(component => component.install(app));
}

export { PurePagination, PureTable, install };
export default install;
