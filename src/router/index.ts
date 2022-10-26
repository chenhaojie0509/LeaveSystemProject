/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\router\index.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 13:59:45
 */
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import routes from './routes'
import useLocalStorage from "../hooks/useLocalStorage";
import { userStore } from '../store/userStore'
import Pinia from '../store'
import { generateRouter } from '../utils/index'
import Routers from './generator-routes'

const router = createRouter({
  history: createWebHistory("/"),
  routes
})
const store = userStore(Pinia);

const { getLocalStorage } = useLocalStorage()
//路由拦截
router.beforeEach(async (to, from, next) => {

  const token = getLocalStorage('token') || false
  const userType = getLocalStorage('userType')
  const username = getLocalStorage('username');
  const userRouters = store.userRouters 

  if (!token && to.name === 'Login') {
    //用户请求登陆页面   
    store.userRouters = []
    next()
  }
  else if (!token && to.name !== 'Login') {
    // 用户未登录，请求其他页面
    next({ name: 'Login' })
  }
  else if (token && to.name === 'Login') {
    // 用户已登录，但请求的是登陆页面
    if (!username) {
      next()
    } else {
      next({ path: '/' })
    }
  } else if (token && username && to.name !== 'Login') { 
    if (userRouters.length === 0){
      await store.setUserRouters(userType)
      let newRoutes = generateRouter(store.userRouters)
      const layout = routes.find((item:RouteRecordRaw)=> item.name == "Layout")!
      layout.children = [...Routers, ...newRoutes];
      router.addRoute(layout);
      router.replace(to.path);
    }
    // 设置 nav
    store.setNavList(to.fullPath);
    next()
    // TODO 

  }else if(!username){
    next({name:'Login'})
  }

})

export default router;