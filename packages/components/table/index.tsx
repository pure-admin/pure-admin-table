import props from "./props";
import Renderer from "../renderer";
import { isFunction } from "../helper";
import { defineComponent, toRefs, ref, unref } from "vue";
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
  setup(props, { slots, attrs }) {
    const { columns, align, headerAlign, showOverflowTooltip } = toRefs(
      props
    ) as unknown as PureTableProps;
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
      </>
    );
  }
});
