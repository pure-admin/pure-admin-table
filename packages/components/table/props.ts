import defaultProps from "element-plus/es/components/table/src/table/defaults";

export default {
  /** Unique key, if there are multiple table instances on a single page, but you only get one table instance, you can solve it by setting the key, but in most cases you don’t need to set it, it will be processed automatically */
  key: {
    type: String || Number,
    default: "0"
  },
  /** Table columns config */
  columns: {
    type: Array,
    default: []
  },
  /** Table loading */
  loading: {
    type: Boolean,
    default: false
  },
  /** Table loading config */
  loadingConfig: {
    type: Object,
    default: () => {}
  },
  /** Integrate Table-column with align property into Table property */
  alignWhole: {
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
  /** The background color of the row when the mouse is over the row */
  rowHoverBgColor: {
    type: String,
    default: ""
  },
  /** Pagination config */
  pagination: {
    type: Object,
    default: {
      total: 0,
      pageSize: 5,
      align: "right",
      background: false,
      pageSizes: [5, 10, 15, 20],
      layout: "total, sizes, prev, pager, next, jumper"
    }
  },
  /** Pagination size */
  paginationSmall: {
    type: Boolean,
    default: false
  },
  ...defaultProps
};
