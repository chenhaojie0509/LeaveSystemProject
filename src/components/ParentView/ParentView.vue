<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\components\ParentView\ParentView.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 16:02:08
-->
<template>
  <router-view v-solt="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>