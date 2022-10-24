<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\SideBar\SideBar.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 15:58:33
-->
<template>
  <div class="side-bar">
    <el-menu
      router
      :collapse="store.collapse"
      :default-active="current"
      active-text-color="#fff"
      class="el-menu-vertical-demo"
      style="height: 100vh"
      @select="selectMenu"
    >
      <el-menu-item index="/index/home" style="margin-top:2.5rem">
        <el-icon><House /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <fragment v-for="(item, index) of store.userRouters" :key="index">
        <MenuItem
          :index="(index + 1).toString()"
          :collapse="store.collapse"
          :item="item"
        />
      </fragment>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import MenuItem from "../MenuItem/MenuItem.vue";
import Pinia from "../../../store/index";
import { userStore } from "../../../store/userStore";

const router = useRouter();
const store = userStore(Pinia);

const activatedStyle = ref<string>(router.currentRoute.value.path);
const selectMenu = (index: string) => {
  activatedStyle.value = index;
};
const current = computed(() => router.currentRoute.value.path);
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 12rem;
  min-height: 25rem;
}

.el-menu--collapse {
  width: 5rem;
  overflow: hidden;
}

.hideIcon:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  display: none;
}

.el-menu-item.is-active {
  background-color: #154ec1 !important;
}
</style>