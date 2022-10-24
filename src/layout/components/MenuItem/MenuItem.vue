<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\MenuItem\MenuItem.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 16:02:34
-->
<template>
  <el-sub-menu v-if="item.children && item.children.length > 1" :index="index + Date.now()">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span v-show="!collapse"> {{ item.title }}</span>
    </template>
    <div v-for="(c, i) of item.children" :key="i">
      <menu-item :index="(i + 1).toString()" :item="c"></menu-item>
    </div>
  </el-sub-menu>

  <el-menu-item
    v-else-if="item.children && item.children.length === 1"
    :index="item.children[0].path"
  >
    <el-icon>
      <component :is="item.children[0].icon"></component>
    </el-icon>
    <template #title> {{ item.children[0].title }}</template>
  </el-menu-item>

  <el-menu-item v-else-if="item && item.pid !== 0" :index="item.path">
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { ref ,watch} from "vue";
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

<style lang="scss">
:deep(.el-menu-item:hover) {
  color: rgb(208, 220, 243)  !important;
}
</style>
