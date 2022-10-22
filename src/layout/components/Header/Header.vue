<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\layout\components\Header\Header.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-22 13:46:14
-->
<template>
  <header>
    <div id="content" style="border-bottom: 1px solid #d9d9d9">
      <span class="menu-collapse" @click="changeCollapse">
        <el-icon>
          <Fold v-if="!store.collapse" />
          <Expand v-else />
        </el-icon>
      </span>
      <span @click="scrollToX('left')" class="to-scroll-left">
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </span>
      <div class="tag-list" id="scroll-Box">
        
        <!-- <VueDraggableNext animation="300" :list="store.navList">
          <transition-group>
            <el-tag
              v-for="element of store.navList"
              :key="element.path"
              size="large"
              :effect="element.path == current ? 'dark' : null"
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
        </VueDraggableNext> -->
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { userStore } from "../../../store/userStore";
import Pinia from "../../../store/index";
// 可拖拽组件


const store = userStore(Pinia);

const changeCollapse = () => {
  store.collapse = !store.collapse;
};

const scrollToX = (direction: string) => {
  const scrollBox = document.getElementById("scroll-Box")!;
  if (direction === "right") {
    scrollBox.scrollLeft = scrollBox.scrollLeft + scrollBox.offsetWidth;
  } else {
    scrollBox.scrollLeft = scrollBox.scrollLeft - scrollBox.offsetWidth;
  }
};
</script>

<style lang="scss" scoped>
</style>
