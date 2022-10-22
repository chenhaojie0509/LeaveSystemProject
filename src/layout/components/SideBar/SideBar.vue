<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\SideBar\SideBar.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-21 10:24:04
-->
<template>
  <div class="side-bar">
    <el-menu
      router
      :collapse="store.collapse"
      :default-active="current"
      active-text-color="#ffd04b"
      :class="`el-menu-vertical-demo ${store.collapse && 'hideIcon'}`"
      background-color="#545c64"
      style="height: 100vh"
      text-color="#fff"
      @select="selectMenu"
    >
      <div class="logo">
        <el-avatar :size="35" src="/src/assets/images/logo.png" />
        <span v-if="!store.collapse">&nbsp;Post_Malone</span>
      </div>

      <el-menu-item index="#">
        <el-icon><House /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <div v-for="(item, index) of store.userRouters" :key="index">
        <MenuItem
          :index="(index + 1).toString()"
          :collapse="store.collapse"
          :item="item"
        />
      </div>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import Pinia from "../../../store/index";
import { userStore } from "../../../store/userStore";
import MenuItem from "../MenuItem/MenuItem.vue";

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
  width: 10px;
  color: #1d1e1fbd;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--collapse {
  width: 60px;
  overflow: hidden;
}

.hideIcon:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  display: none;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 48px;
  padding: 10px 4px 10px 5px;

  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    color: rgb(71, 70, 70);
    transition: all 0.5s ease;
  }
}

.avatar-logo {
  padding: 10px 0 5px 10px;
}

// .el-menu-item.is-active {
//   background-color: rgb(236, 245, 255) !important;
// }
</style>