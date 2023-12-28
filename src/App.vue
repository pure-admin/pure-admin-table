<script setup lang="ts">
import { ref } from "vue";

const tableRef = ref();
import { useColumns } from "./columns";
const {
  empty,
  dayIcon,
  darkIcon,
  chineseIcon,
  englishIcon,
  locale,
  spacer,
  loading,
  columns,
  dataList,
  language,
  tableSize,
  pagination,
  tableHeight,
  loadingConfig,
  paginationSmall,
  paginationAlign,
  t,
  rowClick,
  onEmpty,
  onChange,
  onRefresh,
  handleUpdate,
  handleDelete,
  pageSizeChange,
  getTableMethods,
  pageCurrentChange,
  handleSelectionChange,
  isDark,
  toggleDark
} = useColumns(tableRef);
</script>

<template>
  <el-config-provider size="small">
    <el-space class="pure-space" wrap :spacer="spacer">
      <el-switch
        v-model="isDark"
        inline-prompt
        size="default"
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="toggleDark"
      />
      <el-switch
        v-model="language"
        inline-prompt
        size="default"
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
      <div class="pure-radio">
        <p class="pure-small">{{ t("text.size") }}</p>
        <el-radio-group v-model="tableSize">
          <el-radio-button label="large">large</el-radio-button>
          <el-radio-button label="default">default</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
        </el-radio-group>
      </div>
      <div class="pure-radio">
        <p class="pure-small">{{ t("text.page") }}</p>
        <el-radio-group v-model="paginationSmall" @change="onChange">
          <el-radio-button :label="false">no small</el-radio-button>
          <el-radio-button :label="true">small</el-radio-button>
        </el-radio-group>
      </div>
      <div class="pure-radio">
        <p class="pure-small">{{ t("text.align") }}</p>
        <el-radio-group v-model="paginationAlign">
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="center">center</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>
      </div>
    </el-space>
  </el-config-provider>

  <PureTable
    ref="tableRef"
    :loading="loading"
    :loadingConfig="loadingConfig"
    :size="tableSize as any"
    :height="tableHeight"
    border
    row-key="id"
    alignWhole="center"
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
        <el-link
          type="primary"
          href="https://github.com/pure-admin/pure-admin-table"
          target="_blank"
        >
          MIT License | Copyright (c) 2022-present, pure-admin
        </el-link>
      </p>
    </template>
    <template #operateHeader> {{ t("table.operate") }}</template>
    <template #operation="{ row }">
      <el-button link type="primary" @click="handleUpdate(row)">
        {{ t("button.edit") }}
      </el-button>
      <el-popconfirm :title="t('text.sure')">
        <template #reference>
          <el-button link type="primary" @click="handleDelete(row)">
            {{ t("button.delete") }}
          </el-button>
        </template>
      </el-popconfirm>
    </template>
  </PureTable>
</template>

<style scoped>
:deep(.el-empty__description) {
  margin: 0;
}

.pure-space {
  margin-bottom: 2px;
}

.pure-radio {
  display: flex;
}

.pure-small {
  font-size: 14px;
  line-height: 20px;
}
</style>
