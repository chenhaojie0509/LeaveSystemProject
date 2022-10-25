<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\Content\Content.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-25 16:18:40
-->
<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>