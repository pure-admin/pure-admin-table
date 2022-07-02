<template>
  <el-button type="primary" style="margin: 0 10px 10px 0" @click="onRefresh">
    Refresh Data
  </el-button>
  <el-button type="primary" style="margin: 0 10px 10px 0" @click="onEmpty">
    Empty Data
  </el-button>
  <el-button
    type="primary"
    style="margin: 0 10px 10px 0"
    @click="getTableMethods"
  >
    Get Table Methods
  </el-button>
  <span>Please open the console to watch</span>

  <div v-loading="loading" style="height: 635px">
    <PureTable
      v-if="!loading"
      ref="tableRef"
      border
      row-key="id"
      align="center"
      :height="dataList.length > 0 ? 635.5 : ''"
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
      <template #empty>
        <el-empty description="暂无数据" :image-size="60">
          <template #image> <empty /> </template>
        </el-empty>
      </template>
      <template #append>
        <p>
          Hope
          <el-link
            type="primary"
            href="https://github.com/xiaoxian521/pure-admin-table"
            target="_blank"
          >
            @pureadmin/table
          </el-link>
          can help you. If you like it, please give it a star
        </p>
      </template>
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
  </div>
</template>

<script setup lang="ts">
import empty from "./empty.svg";
import { dataMock } from "./mock";
import { useColumns } from "./columns";
import { ref, reactive, onMounted } from "vue";
import { PureTable, type PaginationProps } from "../packages";
// import { PureTable } from "../dist/index.es";
// import { type PaginationProps } from "../dist";

let loading = ref(true);
let dataList = ref<any>([]);

const pagination = reactive<PaginationProps>({
  pageSize: 5,
  currentPage: 1,
  background: true,
  class: "testClassName",
  total: dataList.value.length
});

const { columns } = useColumns();

const tableRef = ref();

function onRefresh() {
  loading.value = true;
  dataList.value = dataMock;
  pagination.total = dataMock.length;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

function onEmpty() {
  dataList.value = [];
  pagination.pageSize = 5;
  pagination.currentPage = 1;
  pagination.total = 0;
}

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
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 300);
}

onMounted(() => {
  onRefresh();
});
</script>

<style>
.el-empty__description {
  margin: 0 !important;
}
</style>
