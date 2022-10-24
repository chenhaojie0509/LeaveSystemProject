<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\layout\components\Content\Content.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 14:56:00
-->
<template>
  <div>
    <router-view v-slot="{Component}">
      <component :is="Component" />
    </router-view>
  </div>
</template>
<script lang="ts" setup>
  
</script>

<style lang="sass" scoped>

</style>