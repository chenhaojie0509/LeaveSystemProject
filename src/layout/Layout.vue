<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\Layout.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 06:17:12
-->
<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header style="height: 2.5rem">
        <Header />
      </el-header>
      <el-container style="height: calc(100vh - 2.5rem)">
        <el-aside
          :style="`--el-aside-width: ${!store.collapse ? '10rem' : '5rem'} `"
        >
          <div class="aside-div">
            <SideBar />
          </div>
        </el-aside>
        <el-container>
          <el-header style="height:3rem">
            <Nav></Nav>
          </el-header>
          <el-main>
            <el-scrollbar>
              <Content />
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import SideBar from "./components/SideBar/SideBar.vue";
import Header from "./components/Header/Header.vue";
import Content from "./components/Content/Content.vue";
import Nav from "./components/Nav/Nav.vue";

import { userStore } from "../store/userStore";
import Pinia from "../store/index";

const store = userStore(Pinia);
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.el-aside {
  transition: width 0.3s ease-in-out;
  border-right: 0.05rem solid #dcdfe6;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border: none;
  .aside-div {
    background-color: #fff;
    padding-top: 3rem;
  }
}
</style>