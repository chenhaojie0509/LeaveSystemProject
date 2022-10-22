/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\main.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-22 11:04:02
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'

import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 创建vue实例
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(store);
app.use(router);
// 挂载实例
app.mount('#app');