<template>
  <h1 style="text-align: center">完整引入示例</h1>
  <pure-table locale="zhCn" border :loading="loading" :data="tableData" :columns="columns" :pagination="pagination" />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"
import type { TableColumns } from "@pureadmin/table"

const columns: Array<TableColumns> = [{
  label: "Date",
  prop: "date",
}, {
  label: "Name",
  prop: "name",
}, {
  label: "Address",
  prop: "address",
}]

const tableData = [
  {
    date: '2030-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2030-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2030-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2030-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

let loading = ref(true)
const pagination = reactive({
  pageSize: 5,
  currentPage: 1,
  background: true,
  total: tableData.length
})

setTimeout(() => {
  loading.value = false
}, 1500)
</script>

