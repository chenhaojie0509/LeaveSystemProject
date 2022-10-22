<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\Layout.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-21 19:46:16
-->
<template>
  <div
    :class="common-layout"
    style="transform: background 0.4s ease"
  >
    <el-scrollbar height="100vh">
      <el-container>
        <el-aside :style="`width: ${!store.collapse ? '200px' : '55px'}`">
          <SideBar />
        </el-aside>
        <el-container>
          <el-header>
            <Header/>
          </el-header>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import SideBar from './components/SideBar/SideBar.vue'
import Header from './components/Header/Header.vue'
import { userStore } from "../store/userStore";
import Pinia from "../store/index"

const store = userStore(Pinia);

</script>

<style lang="scss" scoped>
.common-layout {
  background-color: #1d1e1f;
}

.el-main {
  padding: 0 6px;
}

.test {
  height: 100%;
  overflow: hidden;
}

.el-header {
  height: 50px;
}

.el-aside {
  transition: width 0.3s ease-in-out;
}
</style>