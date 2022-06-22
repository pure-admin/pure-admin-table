<script setup lang="ts">
import { ref } from "vue";
import { dataMock } from "./mock";
import { useColumns } from "./columns";
import { PureTable } from "../packages";

let dataList = ref(dataMock);
let pageSize = ref(10);
let totalPage = dataList.value.length;

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
  console.log(`current page: ${val}`);
}

function handleSizeChange(val: number) {
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
      :data="dataList"
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
    <el-pagination
      class="flex justify-end mt-4"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
