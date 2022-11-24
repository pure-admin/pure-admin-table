import {
  unref,
  toRefs,
  computed,
  nextTick,
  onMounted,
  defineComponent,
  getCurrentInstance,
  type CSSProperties
} from "vue";
import "./index.css";
import props from "./props";
import Renderer from "../renderer";
import { isFunction } from "../helper";
import { PureTableProps, TableColumnScope } from "../../types";
import { ElTable, ElTableColumn, ElPagination } from "element-plus";

export default defineComponent({
  name: "PureTable",
  props,
  emits: ["size-change", "current-change"],
  setup(props, { slots, attrs, emit, expose }) {
    const instance = getCurrentInstance()!;

    function getTableRef() {
      return instance?.proxy?.$refs[`TableRef${props.key}`];
    }

    function getTableDoms() {
      return (getTableRef() as any).$refs;
    }

    onMounted(() => {
      nextTick(() => {
        if (!props.rowHoverBgColor) return;
        getTableDoms().tableWrapper.style.setProperty(
          "--el-table-row-hover-bg-color",
          props.rowHoverBgColor,
          "important"
        );
      });
    });

    const {
      columns,
      alignWhole,
      headerAlign,
      showOverflowTooltip,
      pagination
    } = toRefs(props) as unknown as PureTableProps;

    const handleSizeChange = val => {
      unref(pagination).pageSize = val;
      emit("size-change", val);
    };

    const handleCurrentChange = val => {
      unref(pagination).currentPage = val;
      emit("current-change", val);
    };

    const getStyle = computed((): CSSProperties => {
      return Object.assign(
        {
          width: "100%",
          margin: "16px 0",
          display: "flex",
          justifyContent:
            unref(pagination).align === "left"
              ? "flex-start"
              : unref(pagination).align === "center"
              ? "center"
              : "flex-end"
        },
        unref(pagination).style ?? {}
      );
    });

    let conditions =
      unref(pagination) &&
      unref(pagination).currentPage &&
      unref(pagination).pageSize;

    const renderColumns = (columns: Record<string, any>, index: number) => {
      const {
        cellRenderer,
        slot,
        headerRenderer,
        hide,
        children,
        prop,
        ...args
      } = columns;

      const defaultSlots = {
        default: (scope: TableColumnScope) => {
          if (cellRenderer) {
            return (
              <Renderer
                render={cellRenderer}
                params={Object.assign(scope, {
                  index: scope.$index,
                  props,
                  attrs
                })}
              ></Renderer>
            );
          } else if (slot) {
            return slots?.[slot]?.(
              Object.assign(scope, {
                index: scope.$index,
                props,
                attrs
              })
            );
          }
        }
      };

      let scopedSlots = headerRenderer
        ? {
            header: (scope: TableColumnScope) => {
              return (
                <Renderer
                  render={headerRenderer}
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

      if (isFunction(hide) && hide(attrs)) {
        return hide(attrs);
      }

      if (children?.length > 0) {
        scopedSlots = children.map(renderColumns);
      }

      return (
        <ElTableColumn
          key={index}
          {...args}
          prop={isFunction(prop) && prop(index) ? prop(index) : prop}
          align={columns?.align ? columns.align : unref(alignWhole)}
          headerAlign={
            columns?.headerAlign ? columns.headerAlign : unref(headerAlign)
          }
          showOverflowTooltip={
            columns?.showOverflowTooltip
              ? columns.showOverflowTooltip
              : unref(showOverflowTooltip)
          }
        >
          {scopedSlots}
        </ElTableColumn>
      );
    };

    expose({
      /** @description Get Table Instance */
      getTableRef,
      /** @description Get Table Doms */
      getTableDoms
    });

    return () => (
      <>
        <ElTable {...props} {...attrs} ref={`TableRef${props.key}`}>
          {{
            default: () => unref(columns).map(renderColumns),
            append: () => slots.append && slots.append(),
            empty: () => slots.empty && slots.empty()
          }}
        </ElTable>
        {conditions ? (
          <ElPagination
            {...attrs}
            class="pure-pagination"
            style={unref(getStyle)}
            {...unref(pagination)}
            small={
              props?.paginationSmall
                ? props?.paginationSmall
                : unref(pagination).small
                ? unref(pagination).small
                : false
            }
            layout={
              unref(pagination).layout ??
              "total, sizes, prev, pager, next, jumper"
            }
            pageSizes={unref(pagination).pageSizes ?? [5, 10, 15, 20]}
            onSizeChange={val => handleSizeChange(val)}
            onCurrentChange={val => handleCurrentChange(val)}
          ></ElPagination>
        ) : null}
      </>
    );
  }
});
