<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\SideBar\SideBar.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-25 22:47:02
-->
<template>
  <!-- <div class="side-bar">
    
  </div> -->
  <el-menu
    router
    :collapse="store.collapse"
    :default-active="current"
    active-text-color="#fff"
    class="el-menu-vertical-demo"
    @select="selectMenu"
  >
    <el-menu-item index="/index/home">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/index/demo">
      <el-icon><Position /></el-icon>
      <template #title>demo</template>
    </el-menu-item>
    <div v-for="(item, index) of store.userRouters" :key="index">
      <MenuItem
        :index="(index + 1).toString()"
        :collapse="store.collapse"
        :item="item"
      />
    </div>
  </el-menu>
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
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 10rem;
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