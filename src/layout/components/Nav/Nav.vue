<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\Nav\Nav.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 17:00:45
-->
<template>
  <el-card shadow="always" :body-style="{ padding: '0px', height: '2rem' }">
    <el-row :gutter="20" align="middle" style="height: 2rem">
      <!-- Nav左按钮 -->
      <el-col :span="1">
        <span @click="scrollToX('left')" class="to-scroll-left">
          <el-icon>
            <ArrowLeft />
          </el-icon>
        </span>
      </el-col>
      <!-- Nav列表 -->
      <el-col :span="14">
        <el-scrollbar id="scroll-Box" @scroll="scroll" ref="scrollbarRef">
          <VueDraggableNext
            animation="300"
            :list="store.navList"
            class="navList"
          >
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
        </el-scrollbar>
      </el-col>
      <!-- Nav右按钮 -->
      <el-col :span="1">
        <span @click="scrollToX('right')" class="to-scroll-left">
          <el-icon>
            <ArrowRight />
          </el-icon>
        </span>
      </el-col>
      <!-- 按钮集合 -->
      <el-col :span="8">
        <el-button-group class="ml-4">
          <el-button
            type="primary"
            plain
            size="small"
            text
            :disabled="current === '/index/home'"
            @click="handleConfigNav('close-current')"
            >关闭当前</el-button
          >
          <el-button
            type="primary"
            plain
            size="small"
            text
            :disabled="store.navList.length <= 2"
            @click="handleConfigNav('close-other')"
            >关闭其他</el-button
          >
        </el-button-group>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { userStore } from "../../../store/userStore";
import Pinia from "../../../store/index";
import { VueDraggableNext } from "vue-draggable-next";
import { computed, ref } from "vue";
import { ElScrollbar } from "element-plus";

const store = userStore(Pinia);
const router = useRouter();

const routerPush = (path: string) => {
  router.push(path);
};

const current = computed(() => router.currentRoute.value.path);

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

const handleConfigNav = (command: string) => {
  switch (command) {
    case "close-current":
      closeNav(router.currentRoute.value.fullPath);
      break;
    case "close-other":
      store.cloneOtherNav(router.currentRoute.value.fullPath);
      break;
  }
};

const value = ref(0);
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
const scroll = ({ scrollLeft }) => {
  value.value = scrollLeft;
};
const scrollToX = (direction: string) => {
  if (direction === "right") {
    scrollbarRef.value!.setScrollLeft(300)
  } else {
    
  }
};

</script>
<style lang="scss" scoped>
.el-card {
  margin: 0.5rem 0.5rem;
  padding-left: 1rem;
  height: 2rem;
  border: none;
  .el-tag {
    margin: 0.25rem;
  }
}
#scroll-Box {
  .navList {
    display: flex;
    flex-wrap: nowrap;
  }
}
.avtive-router:deep(.el-icon) {
  background-color: #0960bd !important;
  color: #fff !important;
  border-radius: 0;
}
:deep(.el-tag__close) {
  background-color: #1890ff;
  color: #fff;
  border-radius: 0;
}
.avtive-router {
  background-color: #0960bd !important;
  color: #fff !important;
  border: 1px solid #0960bd !important;
}
:deep(.el-switch.is-checked .el-switch__core) {
  background-color: #000000;
  border: 1px solid #4c4d4f;
}
.to-scroll-left {
  cursor: pointer;
}
.to-scroll-right {
  cursor: pointer;
}
</style>
