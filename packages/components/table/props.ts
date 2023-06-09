import defaultProps from "element-plus/es/components/table/src/table/defaults";

// https://github.com/pure-admin/pure-admin-table/blob/main/packages/types/table-props.ts
export default {
  key: {
    type: String || Number,
    default: "0"
  },
  columns: {
    type: Array,
    default: []
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingConfig: {
    type: Object,
    default: () => {}
  },
  alignWhole: {
    type: String,
    default: "left"
  },
  headerAlign: {
    type: String,
    default: ""
  },
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  rowHoverBgColor: {
    type: String,
    default: ""
  },
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
  paginationSmall: {
    type: Boolean,
    default: false
  },
  adaptive: {
    type: Boolean,
    default: false
  },
  adaptiveConfig: {
    type: Object,
    default: {
      offsetBottom: 96,
      fixHeader: true,
      timeout: 60,
      zIndex: 100
    }
  },
  ...defaultProps
};
