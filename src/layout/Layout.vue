<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\Layout.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 15:48:45
-->
<template>
  <div>
    <Header/>
    <el-scrollbar>
      <el-container id="body">
        <el-aside id="aside">
          <SideBar/>
        </el-aside>
        <el-container id="container">
          <!-- <el-main class="el-main">
            <Content />
          </el-main> -->
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import SideBar from "./components/SideBar/SideBar.vue";
import Header from "./components/Header/Header.vue";
import Content from "./components/Content/Content.vue";
import { userStore } from "../store/userStore";
import Pinia from "../store/index";

const store = userStore(Pinia);
</script>

<style lang="scss" scoped>
#body{
  height: 100vh;
}
#aside{
  width: 20%;
}

#container{
  width:80%;
}
</style>