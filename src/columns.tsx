import { ref } from "vue";

export function useColumns() {
  const columns = ref([
    {
      type: "selection",
      width: 55,
      align: "left"
    },
    {
      label: "Department Name",
      prop: "name",
      width: 180,
      align: "left"
    },
    {
      label: "Sort",
      prop: "sort",
      width: 60
    },
    {
      label: "Status",
      prop: "status",
      width: 80,
      cellRenderer: ({ row, props }) => (
        <el-tag
          size={props.size}
          type={row.status === 1 ? "danger" : "success"}
          effect="plain"
        >
          {row.status === 0 ? "关闭" : "开启"}
        </el-tag>
      )
    },
    {
      label: "Creation Time",
      width: 180,
      prop: "createTime"
    },
    {
      label: "Remark",
      prop: "remark"
    },
    {
      label: "Operate",
      fixed: "right",
      width: 140,
      slot: "operation"
    }
  ]);

  return {
    columns
  };
}
