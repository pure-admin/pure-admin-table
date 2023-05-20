import { ref } from "vue";
import type { TableColumns } from "../packages/index";

let srcList: Array<string> = [];

for (let i = 1; i <= 11; i++) {
  srcList.push(`./imgs/${i}.jpg`);
}

export function useColumns() {
  const columns: Array<TableColumns> = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "Department Name",
      prop: "name",
      align: "left"
    },
    {
      label: "Sort",
      prop: "sort",
      children: [
        {
          label: "Remark",
          prop: "remark",
          children: [
            {
              label: "Creation Time",
              prop: "createTime"
            },
            {
              label: "Status",
              prop: "status",
              cellRenderer: ({ row, props }) => (
                <el-tag
                  size={props.size}
                  type={row.status === 1 ? "danger" : "success"}
                  effect="plain"
                >
                  {row.status === 0 ? "关闭" : "开启"}
                </el-tag>
              )
            }
          ]
        },
        {
          prop: "createTime",
          headerRenderer: () => <p>🫠headerRenderer</p>,
          cellRenderer: ({
            index,
            props: {
              pagination: { currentPage, pageSize }
            }
          }) => {
            let currentIndex = (currentPage - 1) * pageSize + index;
            return (
              <el-image
                fit="cover"
                loading="lazy"
                preview-teleported={true}
                initial-index={currentIndex}
                src={srcList[currentIndex]}
                preview-src-list={srcList}
                style="width: 80px; height: 80px; border-radius: 6px"
              />
            );
          }
        }
      ]
    },
    // {
    //   label: "Status",
    //   prop: "status",
    //   width: 100,
    //   cellRenderer: ({ row, props }) => (
    //     <el-tag
    //       size={props.size}
    //       type={row.status === 1 ? "danger" : "success"}
    //       effect="plain"
    //     >
    //       {row.status === 0 ? "关闭" : "开启"}
    //     </el-tag>
    //   )
    // },
    // {
    //   label: "Creation Time",
    //   width: 180,
    //   prop: "createTime"
    // },
    // {
    //   width: 150,
    //   prop: "createTime",
    //   headerRenderer: () => <p>🫠headerRenderer</p>,
    //   cellRenderer: ({
    //     index,
    //     props: {
    //       pagination: { currentPage, pageSize }
    //     }
    //   }) => {
    //     let currentIndex = (currentPage - 1) * pageSize + index;
    //     return (
    //       <el-image
    //         fit="cover"
    //         loading="lazy"
    //         preview-teleported={true}
    //         initial-index={currentIndex}
    //         src={srcList[currentIndex]}
    //         preview-src-list={srcList}
    //         style="width: 80px; height: 80px; border-radius: 6px"
    //       />
    //     );
    //   }
    // },
    // {
    //   label: "Remark",
    //   prop: "remark"
    // },
    {
      // label: "Operate",
      headerSlot: "operateHeader",
      fixed: "right",
      slot: "operation"
    }
  ];

  return {
    columns
  };
}
