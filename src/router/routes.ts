/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\router\routes.ts
 * @LastEditors: chenhaojie
 *
 */
import { RouteRecordRaw } from "vue-router";
const Routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: ()=>import('../layout/Layout.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        redirect: '/index/home',
        component: () => import('../components/ParentView/ParentView.vue'),
        children:[
          {
            path:'home',
            name:'Home',
            component:()=> import('../views/Home/Home.vue'),
          },
        ],
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import('../views/NotFound/NotFound.vue'),
  },

]

export default Routes