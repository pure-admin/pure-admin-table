import type { TableProps } from "element-plus/es/components/table/src/table/defaults";
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";

export type TableAlign = "left" | "center" | "right";

export interface PureTableProps extends TableProps<any> {
  columns: Array<any>;
  align: TableAlign;
  headerAlign: TableAlign;
  showOverflowTooltip: boolean;
}

export interface TableColumnScope {
  row?: any;
  column: TableColumnCtx<any>;
  $index: number;
}
