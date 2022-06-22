import { ElTable } from "element-plus";

export default {
  columns: {
    type: Array,
    default: []
  },
  /** Integrate Table-column with align property into Table property */
  align: {
    type: String,
    default: "left"
  },
  /** Integrate Table-column with header-align property into Table property */
  headerAlign: {
    type: String,
    default: ""
  },
  /** Integrate Table-column with show-overflow-tooltip property into Table property */
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  ...ElTable.props
};
