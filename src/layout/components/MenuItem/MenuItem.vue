<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\MenuItem\MenuItem.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-21 09:40:47
-->
<template>
  <el-sub-menu
    v-if="item.children && item.children.length >= 1"
    :index="index + Date.now()"
  >
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span v-show="!collapse">{{ item.title }}</span>
    </template>
    <div v-for="(c, i) in item.children" :key="i">
      <menu-item :index="(i + 1).toString()" :item="c"></menu-item>
    </div>
  </el-sub-menu>

  <el-menu-item
    :style="store.dark && 'background-color:#282829'"
    v-else-if="item.children && item.children.length === 1"
    :index="item.children[0].path"
  >
    <el-icon>
      <component :is="item.children[0].icon"></component>
    </el-icon>
    <template #title> {{ item.children[0].title }}</template>
  </el-menu-item>

  <el-menu-item
    :style="store.dark && 'background-color:#282829'"
    v-else-if="item && item.pid !== 0"
    :index="item.path"
  >
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
  <el-menu-item v-else> 123456 </el-menu-item>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Pinia from "../../../store/index";
import { userStore } from "../../../store/userStore";

const store = userStore(Pinia);

const props = defineProps({
  index: String,
  item: Object,
  collapse: Boolean,
});
</script>

<style scoped lang="scss">
// .el-menu-item.is-active {
//   background-color: #0960bd !important;
// }

:deep(.el-menu--inline) {
  background-color: #5a6066
}

// :deep(.el-menu-item:hover) {
//   color: rgb(5, 5, 5) !important;
// }
</style>
