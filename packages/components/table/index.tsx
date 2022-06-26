import props from "./props";
import Renderer from "../renderer";
import { isFunction } from "../helper";
import {
  ref,
  unref,
  toRefs,
  computed,
  defineComponent,
  type CSSProperties
} from "vue";
import { PureTableProps, TableColumnScope } from "../../types";

const TableRef = ref();

export default defineComponent({
  name: "PureTable",
  props,
  methods: {
    /** Get Table Methods */
    getTableRef() {
      return TableRef.value;
    }
  },
  emits: ["size-change", "current-change"],
  setup(props, { slots, attrs, emit }) {
    const { columns, align, headerAlign, showOverflowTooltip, pagination } =
      toRefs(props) as unknown as PureTableProps;

    const handleSizeChange = val => {
      unref(pagination).pageSize = val;
      emit("size-change", val);
    };

    const handleCurrentChange = val => {
      unref(pagination).currentPage = val;
      emit("current-change", val);
    };

    const getStyle = computed((): CSSProperties => {
      return {
        width: "100%",
        margin: "16px 0",
        display: "flex",
        justifyContent:
          unref(pagination).align === "left"
            ? "flex-start"
            : unref(pagination).align === "center"
            ? "center"
            : "flex-end"
      };
    });

    let conditions = unref(pagination) && unref(pagination).currentPage;

    return () => (
      <>
        <el-table {...props} {...attrs} ref={TableRef}>
          {unref(columns).map((column, index) => {
            const defaultSlots = {
              default: (scope: TableColumnScope) => {
                if (column?.cellRenderer) {
                  return (
                    <Renderer
                      render={column.cellRenderer}
                      params={Object.assign(scope, {
                        index: scope.$index,
                        props,
                        attrs
                      })}
                    ></Renderer>
                  );
                } else if (column?.slot) {
                  return slots?.[column.slot]?.(
                    Object.assign(scope, {
                      index: scope.$index,
                      props,
                      attrs
                    })
                  );
                }
              }
            };
            const scopedSlots = column?.headerRenderer
              ? {
                  header: (scope: TableColumnScope) => {
                    return (
                      <Renderer
                        render={column.headerRenderer}
                        params={Object.assign(scope, {
                          index: scope.$index,
                          props,
                          attrs
                        })}
                      ></Renderer>
                    );
                  },
                  ...defaultSlots
                }
              : defaultSlots;
            if (isFunction(column?.hide) && column?.hide(attrs)) {
              return column?.hide(attrs);
            }
            return (
              <el-table-column
                {...column}
                key={index}
                align={column.align ? column.align : unref(align)}
                headerAlign={
                  column.headerAlign ? column.headerAlign : unref(headerAlign)
                }
                showOverflowTooltip={
                  Object.keys(column).includes("showOverflowTooltip")
                    ? column.showOverflowTooltip
                    : unref(showOverflowTooltip)
                }
              >
                {scopedSlots}
              </el-table-column>
            );
          })}
        </el-table>
        {conditions ? (
          <el-pagination
            {...attrs}
            style={unref(getStyle)}
            {...unref(pagination)}
            layout={
              unref(pagination).layout ??
              "total, sizes, prev, pager, next, jumper"
            }
            pageSizes={unref(pagination).pageSizes ?? [5, 10, 15, 20]}
            onSizeChange={val => handleSizeChange(val)}
            onCurrentChange={val => handleCurrentChange(val)}
          ></el-pagination>
        ) : null}
      </>
    );
  }
});
