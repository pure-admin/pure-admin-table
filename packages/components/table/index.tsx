import {
  ref,
  unref,
  toRefs,
  inject,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
  defineComponent,
  getCurrentInstance,
  type CSSProperties
} from "vue";
import props from "./props";
import Renderer from "../renderer";
import { en, zhCn, zhTw } from "../../locale";
import {
  Language,
  PureTableProps,
  TableColumnScope,
  PureTableInstallOptions
} from "../../types";
import {
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElLoadingDirective
} from "element-plus";
import {
  nameHyphenate,
  isFunction,
  isBoolean,
  isString,
  useDark,
  debounce
} from "@pureadmin/utils";

export default defineComponent({
  name: "PureTable",
  props,
  directives: {
    Loading: ElLoadingDirective
  },
  emits: ["page-size-change", "page-current-change"],
  setup(props, { slots, attrs, emit, expose }) {
    const { locale: defaultLocale, i18n } = inject<PureTableInstallOptions>(
      "locale",
      { locale: null, i18n: null }
    );

    const {
      key,
      locale,
      columns,
      loading,
      adaptive,
      pagination,
      alignWhole,
      headerAlign,
      loadingConfig,
      adaptiveConfig,
      rowHoverBgColor,
      showOverflowTooltip
    } = toRefs(props) as unknown as PureTableProps;

    const isClient = ref(false);
    const { isDark } = useDark();
    const instance = getCurrentInstance()!;
    let conditions =
      unref(pagination) &&
      unref(pagination).currentPage &&
      unref(pagination).pageSize;

    let globalI18n = computed(() => {
      if (!unref(i18n)) return;
      const elLocale = i18n.global.getLocaleMessage(
        unref(i18n.global.locale)
      )?.["el"];
      if (elLocale) {
        return { el: elLocale } as Language;
      } else {
        console.warn(
          "@pureadmin/table：element-plus国际化文件未正确配置到vue-i18n中"
        );
        return null;
      }
    });

    let globalLocale = computed(() => {
      if (isString(defaultLocale)) {
        const _locale = [en, zhCn, zhTw].filter(
          i18 => i18.name === nameHyphenate(defaultLocale as string)
        )[0];
        return _locale;
      } else {
        return defaultLocale as Language;
      }
    });

    let locales = computed(() => {
      if (!unref(locale)) return;
      if (isString(unref(locale))) {
        const _locale = [en, zhCn, zhTw].filter(
          i18 => i18.name === nameHyphenate(unref(locale) as string)
        )[0];
        return _locale;
      } else {
        return unref(locale) as Language;
      }
    });

    let convertLoadingConfig = computed(() => {
      if (!unref(loadingConfig)) return;
      let { text, spinner, svg, viewBox } = unref(loadingConfig);
      return {
        "element-loading-text": text,
        "element-loading-spinner": spinner,
        "element-loading-svg": svg,
        "element-loading-svg-view-box": viewBox
      };
    });

    const loadingBackground = computed(() => {
      if (!unref(loading)) return;
      return {
        "element-loading-background": unref(loadingConfig)?.background
          ? unref(loadingConfig)?.background
          : isDark.value
            ? "rgba(0, 0, 0, 0.45)"
            : "rgba(255, 255, 255, 0.45)"
      };
    });

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

    const handleSizeChange = val => {
      unref(pagination).pageSize = val;
      emit("page-size-change", val);
    };

    const handleCurrentChange = val => {
      unref(pagination).currentPage = val;
      emit("page-current-change", val);
    };

    const renderColumns = (columns: Record<string, any>, index: number) => {
      const {
        cellRenderer,
        slot,
        headerRenderer,
        headerSlot,
        hide,
        children,
        prop,
        ...args
      } = columns;

      if (isFunction(hide) && hide(attrs)) {
        return hide(attrs);
      }

      if (isBoolean(hide) && hide) {
        return hide;
      }

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
        : slots?.[headerSlot]
          ? {
              header: (scope: TableColumnScope) => {
                return slots?.[headerSlot]?.(
                  Object.assign(scope, {
                    index: scope.$index,
                    props,
                    attrs
                  })
                );
              },
              ...defaultSlots
            }
          : defaultSlots;

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

    const getTableRef = () => instance?.proxy?.$refs[`TableRef${unref(key)}`];

    const getTableDoms = () => (getTableRef() as any).$refs;

    const setAdaptive = async () => {
      await nextTick();
      const tableWrapper = getTableDoms().tableWrapper;
      const offsetBottom = unref(adaptiveConfig).offsetBottom ?? 96;
      tableWrapper.style.height = `${
        window.innerHeight -
        tableWrapper.getBoundingClientRect().top -
        offsetBottom
      }px`;
    };

    const debounceSetAdaptive = debounce(
      setAdaptive,
      unref(adaptiveConfig).timeout ?? 60
    );

    const setHeaderSticky = async (zIndex = 3) => {
      await nextTick();
      const headerStyle = getTableDoms().tableHeaderRef.$el.style;
      headerStyle.position = "sticky";
      headerStyle.top = 0;
      headerStyle.zIndex = zIndex;
    };

    onMounted(() => {
      isClient.value = true;
      nextTick(() => {
        if (unref(rowHoverBgColor)) {
          getTableDoms().tableWrapper.style.setProperty(
            "--el-table-row-hover-bg-color",
            unref(rowHoverBgColor),
            "important"
          );
        }

        if (unref(adaptive)) {
          setAdaptive();
          window.addEventListener("resize", debounceSetAdaptive);
          const hasFixHeader = Reflect.has(unref(adaptiveConfig), "fixHeader");
          if (hasFixHeader && !unref(adaptiveConfig).fixHeader) {
            return;
          } else {
            setHeaderSticky(unref(adaptiveConfig).zIndex ?? 3);
          }
        }
      });
    });

    onBeforeUnmount(() => {
      if (unref(adaptive)) {
        window.removeEventListener("resize", debounceSetAdaptive);
      }
    });

    expose({
      /** 获取表格实例 */
      getTableRef,
      /** 获取表格多个`Dom`元素 */
      getTableDoms,
      /** 设置表格自适应高度 */
      setAdaptive,
      /** 设置表头为 `sticky` 布局 */
      setHeaderSticky
    });

    let renderTable = () => {
      return (
        <>
          <ElTable {...props} {...attrs} ref={`TableRef${unref(key)}`}>
            {{
              default: () => unref(columns).map(renderColumns),
              append: () => slots.append && slots.append(),
              empty: () => slots.empty && slots.empty()
            }}
          </ElTable>
          {conditions && unref(isClient) ? (
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
              // @ts-expect-error
              onSizeChange={val => handleSizeChange(val)}
              onCurrentChange={val => handleCurrentChange(val)}
            ></ElPagination>
          ) : null}
        </>
      );
    };

    return () => (
      <div
        class="pure-table"
        style="width:100%"
        v-loading={unref(loading)}
        {...unref(loadingBackground)}
        {...unref(convertLoadingConfig)}
      >
        {unref(globalI18n) || unref(globalLocale) || unref(locales) ? (
          <ElConfigProvider
            locale={
              unref(locales)
                ? unref(locales)
                : unref(globalI18n) || unref(globalLocale)
            }
          >
            {renderTable()}
          </ElConfigProvider>
        ) : (
          renderTable()
        )}
      </div>
    );
  }
});
