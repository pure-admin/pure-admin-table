import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import { nextTick, type VNode, reactive, ref } from "vue";
import { PureTable, type PaginationProps } from "../packages";

const _mount = (render: () => VNode) => {
  return mount(render, { attachTo: document.body });
};

describe("PureTable", () => {
  const columns = [
    {
      label: "Department Name",
      prop: "name"
    }
  ];
  const dataList = [{ name: "Tom" }];

  it("should work with import on demand", () => {
    mount(PureTable);
  });

  test("table `append` slot", async () => {
    const wrapper = _mount(() => (
      <PureTable columns={columns} data={[]}>
        {{
          append: () => <p class="append">Append</p>
        }}
      </PureTable>
    ));
    await nextTick();
    expect(wrapper.find(".append").text()).toEqual("Append");
    wrapper.unmount();
  });

  test("table `empty` slot", async () => {
    const wrapper = _mount(() => (
      <PureTable columns={columns} data={[]}>
        {{
          empty: () => <div class="empty">Empty</div>
        }}
      </PureTable>
    ));
    await nextTick();
    expect(wrapper.find(".empty").exists()).toEqual(true);
    wrapper.unmount();
  });

  test("table `pagination` prop", async () => {
    const pagination = reactive<PaginationProps>({
      pageSize: 10,
      currentPage: 1,
      background: true,
      class: "testClassName",
      total: 1
    });
    const wrapper = _mount(() => (
      <PureTable columns={columns} data={dataList} pagination={pagination} />
    ));
    await nextTick();
    expect(wrapper.find(".testClassName").exists()).toEqual(true);
    wrapper.unmount();
  });

  test("table `getTableRef` methods", async () => {
    const tableRef = ref();
    const wrapper = _mount(() => (
      <PureTable ref={tableRef} columns={columns} data={dataList} />
    ));
    await nextTick();
    expect(tableRef.value.getTableRef()).toBeDefined();
    wrapper.unmount();
  });
});
