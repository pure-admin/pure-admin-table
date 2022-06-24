<script setup lang="ts">
import { dataMock } from "./mock";
import { ref, reactive } from "vue";
import { useColumns } from "./columns";
import { PureTable, PurePagination } from "../packages";

let dataList = ref(dataMock);

const pagerConfig = reactive({
  currentPage: 1,
  pageSize: 10,
  total: dataList.value.length,
  pageSizes: [10, 20, 30, 50],
  background: true,
  layout: "total, sizes, prev, pager, next, jumper, slot"
});

const { columns } = useColumns();

const tableRef = ref();

function handleUpdate(row) {
  console.log(row);
}

function handleDelete(row) {
  console.log(row);
}

function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
}

function handleCurrentChange(val: number) {
  pagerConfig.currentPage = val;
  console.log(`current page: ${val}`);
}

function handleSizeChange(val: number) {
  pagerConfig.pageSize = val;
  console.log(`${val} items per page`);
}
</script>

<template>
  <div>
    <PureTable
      ref="tableRef"
      border
      align="center"
      row-key="id"
      table-layout="auto"
      default-expand-all
      :data="
        dataList.slice(
          (pagerConfig.currentPage - 1) * pagerConfig.pageSize,
          pagerConfig.currentPage * pagerConfig.pageSize
        )
      "
      :columns="columns"
      :header-cell-style="{
        background: 'var(--el-table-row-hover-bg-color)',
        color: 'var(--el-text-color-primary)'
      }"
      @selection-change="handleSelectionChange"
    >
      <template #operation="{ row }">
        <el-button
          class="reset-margin"
          link
          type="primary"
          @click="handleUpdate(row)"
        >
          修改
        </el-button>
        <el-popconfirm title="是否确认删除?">
          <template #reference>
            <el-button
              class="reset-margin"
              link
              type="primary"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </PureTable>
    <PurePagination
      v-bind="pagerConfig"
      @size-change="handleSizeChange"
      @current-Change="handleCurrentChange"
      class="flex justify-end mt-4"
    />
  </div>
</template>
