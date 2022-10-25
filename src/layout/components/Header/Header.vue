<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\Header\Header.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-25 22:46:06
-->
<template>
  <el-card class="header" :body-style="{ padding: '0px', height: '100%' }" style="always">
    <el-row justify="space-between">
      <el-col :span="10">
        <div class="left" @click="changeCollapse">
          <el-icon size="1.2rem">
            <Fold v-if="!store.collapse" color="#154ec1" />
            <Expand v-else color="#154ec1" />
          </el-icon>
        </div>
        <h4>学生请假管理系统</h4>
      </el-col>
      <el-col :span="2">
        <el-dropdown @command="handleCommand">
          <el-avatar :size="30" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>

    <!-- <div id="content">
      
      <span @click="scrollToX('left')" class="to-scroll-left">
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </span>
      <div class="tag-list" id="scroll-Box">
        c`tag-item ${
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
      </div>
      <span @click="scrollToX('right')" class="to-scroll-right">
        <el-icon>
          <ArrowRight />
        </el-icon>
      </span>
      <el-dropdown trigger="click" @command="handleConfigNav">
        <span :class="`nav-config`">
          <el-icon>
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              :disabled="current === '/index/home'"
              command="close-current"
              >关闭当前</el-dropdown-item
            >
            <el-dropdown-item
              :disabled="store.navList.length <= 2 && current !== '/index/home'"
              command="close-other"
            >
              关闭其他</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      
    </div> -->
  </el-card>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { userStore } from "../../../store/userStore";
import Pinia from "../../../store/index";

const router = useRouter();
const store = userStore(Pinia);

const changeCollapse = () => {
  store.collapse = !store.collapse;
};

const collapseSwitchChange = () => {
  return `width: calc(100% - ${!store.collapse ? "200" : "60"}px);`;
};

const handleCommand = () => {
  localStorage.clear();
  router.go(0);
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-radius: 0px;
  .el-row {
    height: 100%;
    .left {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
    h4 {
      color: #154ec1;
      margin-left: 0.5rem;
    }
    .el-col {
      display: flex;
      align-items: center;
    }
  }
}
</style>
