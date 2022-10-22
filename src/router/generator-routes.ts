/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\router\generator-routes.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 16:28:58
 */
const Routes = [
  {
    path: '/index',
    name: 'Index',
    redirect: '/index/home',
    component: () => import('../components/ParentView/ParentView.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home/Home.vue'),
      },
    ],
  },
];

export default Routes;
