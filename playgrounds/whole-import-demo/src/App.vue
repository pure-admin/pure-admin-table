<template>
  <h1 style="text-align: center">完整引入示例</h1>
  <pure-table :data="tableData" :columns="columns"></pure-table>
</template>

<script lang="ts" setup>
const columns = [{
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
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

