<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\Nav\Nav.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-25 22:57:33
-->
<template>
  <el-card shadow="always" :body-style="{ padding: '0px' }">
    <el-row :gutter="20" align="middle">
      <el-col :span="16">
        <VueDraggableNext animation="300" :list="store.navList">
          <transition-group>
            <el-tag
              v-for="element of store.navList"
              :key="element.path"
              size="small"
              :class="`tag-item ${
                element.path === current ? 'avtive-router' : ''
              }`"
              :closable="element.path !== '/index/home'"
              :hit="false"
              @click="routerPush(element.path)"
              @close="closeNav(element.path)"
            >
              {{ element.title }}
            </el-tag>
          </transition-group>
        </VueDraggableNext>
      </el-col>
      <el-col :span="8">
        <button>清空</button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { userStore } from "../../../store/userStore";
import Pinia from "../../../store/index";
import { VueDraggableNext } from "vue-draggable-next";

const store = userStore(Pinia);
const router = useRouter();
const routerPush = (path: string) => {
  router.push(path);
};

const closeNav = (path: string) => {
  const currentPath = router.currentRoute.value.fullPath;
  store.navList.forEach((item, index) => {
    if (path === item.path) {
      if (currentPath === item.path) {
        const isLast = index === store.navList.length - 1;
        isLast
          ? router.push(store.navList[index - 1].path)
          : router.push(store.navList[index + 1].path);
      }
      store.closeNav(index);
    }
  });
};
</script>
<style lang="scss" scoped>
.el-card {
  margin: 0.5rem 0.5rem;
  height: 2rem;
  border: none;
  .el-tag {
    margin-left: 0.5rem;
    align-self: center;
  }
}
</style>
