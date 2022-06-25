<template>
  <el-button
    type="primary"
    style="margin: 0 10px 10px 0"
    @click="getTableMethods"
  >
    Get Table Methods
  </el-button>
  <span>Please open the console to watch</span>
  <PureTable
    ref="tableRef"
    border
    align="center"
    row-key="id"
    table-layout="auto"
    showOverflowTooltip
    :data="
      dataList.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize
      )
    "
    :columns="columns"
    :pagination="pagination"
    :header-cell-style="{
      background: 'var(--el-table-row-hover-bg-color)',
      color: 'var(--el-text-color-primary)'
    }"
    @selection-change="handleSelectionChange"
    @row-click="rowClick"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
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
</template>

<script setup lang="ts">
import { dataMock } from "./mock";
import { ref, reactive } from "vue";
import { useColumns } from "./columns";
import { PureTable, type PaginationProps } from "../packages";

let dataList = ref(dataMock);

const pagination = reactive<PaginationProps>({
  pageSize: 10,
  currentPage: 1,
  background: true,
  total: dataList.value.length
});

const { columns } = useColumns();

const tableRef = ref();

function getTableMethods() {
  console.log("methods", tableRef.value.getTableRef());
}

function handleUpdate(row) {
  console.log(row);
}

function handleDelete(row) {
  console.log(row);
}

function handleSelectionChange(val) {
  console.log("handleSelectionChange", val);
}

function rowClick(row, column, event) {
  console.log("rowClick", row, column, event);
}

function onSizeChange(val) {
  console.log("onSizeChange", val);
}

function onCurrentChange(val) {
  console.log("onCurrentChange", val);
}
</script>
