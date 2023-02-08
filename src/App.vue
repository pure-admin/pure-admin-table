<template>
  <el-space :spacer="spacer">
    <el-switch
      v-model="isDark"
      inline-prompt
      size="large"
      :active-icon="dayIcon"
      :inactive-icon="darkIcon"
      @change="dataThemeChange"
    />
    <el-switch
      v-model="language"
      inline-prompt
      size="large"
      :active-icon="chineseIcon"
      :inactive-icon="englishIcon"
      @change="locale = language ? 'zh' : 'en'"
    />
    <el-button type="primary" @click="onRefresh">
      {{ t("button.refresh") }}
    </el-button>
    <el-button type="primary" @click="onEmpty">
      {{ t("button.empty") }}
    </el-button>
    <el-tooltip :content="t('text.console')">
      <el-button type="primary" @click="getTableMethods">
        {{ t("button.methods") }}
      </el-button>
    </el-tooltip>
  </el-space>

  <el-config-provider :locale="language ? zhCn : en">
    <PureTable
      ref="tableRef"
      :loading="loading"
      :loadingConfig="loadingConfig"
      border
      row-key="id"
      alignWhole="center"
      height="687"
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
      @page-size-change="pageSizeChange"
      @page-current-change="pageCurrentChange"
    >
      <template #empty>
        <el-empty :description="t('text.empty')" :image-size="60">
          <template #image>
            <empty />
          </template>
        </el-empty>
      </template>
      <template #append>
        <p style="text-align: center">
          {{ t("text.hope") }}
          <el-link
            type="primary"
            href="https://github.com/pure-admin/pure-admin-table"
            target="_blank"
          >
            @pureadmin/table
          </el-link>
          {{ t("text.help") }}
        </p>
      </template>
      <template #operation="{ row }">
        <el-button
          class="reset-margin"
          link
          type="primary"
          @click="handleUpdate(row)"
        >
          {{ t("button.edit") }}
        </el-button>
        <el-popconfirm :title="t('text.sure')">
          <template #reference>
            <el-button
              class="reset-margin"
              link
              type="primary"
              @click="handleDelete(row)"
            >
              {{ t("button.delete") }}
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </PureTable>
  </el-config-provider>
</template>

<script setup lang="ts">
import { dataMock } from "./mock";
import { useI18n } from "vue-i18n";
import { useColumns } from "./columns";
import { ElDivider } from "element-plus";
import { h, ref, reactive, onMounted } from "vue";
import en from "element-plus/lib/locale/lang/en";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import {
  PureTable,
  type PaginationProps,
  type LoadingConfig
} from "../packages";
// import { PureTable } from "../dist/index.es";
// import { type PaginationProps } from "../dist";

import empty from "./svg/empty.svg?component";
import dayIcon from "./svg/day.svg";
import darkIcon from "./svg/dark.svg";
import chineseIcon from "./svg/chinese.svg";
import englishIcon from "./svg/english.svg";

let loading = ref(true);
let isDark = ref(false);
let language = ref(true);
let dataList = ref<any>([]);
const { t, locale } = useI18n();
const spacer = h(ElDivider, { direction: "vertical" });

const pagination = reactive<PaginationProps>({
  pageSize: 5,
  currentPage: 1,
  background: true,
  class: "testClassName",
  total: dataList.value.length
});

const loadingConfig: LoadingConfig = {
  text: "加载中",
  viewBox: "-10, -10, 50, 50",
  spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
};

const { columns } = useColumns();

const tableRef = ref();

function onRefresh() {
  loading.value = true;
  dataList.value = dataMock;
  pagination.total = dataMock.length;
  setTimeout(() => {
    loading.value = false;
  }, 800);
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

function pageSizeChange(val) {
  console.log("pageSizeChange", val);
}

function pageCurrentChange(val) {
  console.log("pageCurrentChange", val);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 800);
}

function dataThemeChange(val) {
  isDark.value = val;
  if (val) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
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
