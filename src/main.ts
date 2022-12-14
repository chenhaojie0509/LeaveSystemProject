/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\main.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 14:38:50
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import './assets/Style/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { Fragment } from 'vue-fragment'
// 创建vue实例
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
//编码但不渲染的标签 
app.use(Fragment.Plugin)
app.use(store);
app.use(router);
// 挂载实例
app.mount('#app');