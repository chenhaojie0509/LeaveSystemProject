/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\utils\index.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 16:04:44
 */
import { RouteRecordRaw } from 'vue-router'
import { UserMenuItem, UserTreeMenuItem } from '../interface/menu'

interface Itemcache {
  [key: number]: UserTreeMenuItem
}

const modules = import.meta.glob('../views/**/**.vue')

/**
 * @description: 将数组转化为树形结构菜单
 * @param {UserMenuItem} menuList
 * @return {*}
 * @author: Post_Malone
 */
export const getUserTreeMenus = (menuList: UserMenuItem[]): UserTreeMenuItem[] => {

  const treeMenuList = [] as UserTreeMenuItem[]
  const cache: Itemcache = {}
  menuList.forEach((item) => {
    cache[item.rid] = item
  })
  menuList.forEach((item) => {
    const parent = cache[item.pid]
    if (parent) {
      if (!parent.children) {
        parent.children = [] as UserTreeMenuItem[]
      }
      parent.children.push(item)
    } else {
      // 为根节点
      treeMenuList.push(item)
    }
  })
  return treeMenuList

}

/**
 * @description: 创建动态路由
 * @param {UserTreeMenuItem} treemenuList
 * @return {*}
 * @author: Post_Malone
 */
export const generateRouter = (treemenuList: UserTreeMenuItem[]) => {
  let newRouters: RouteRecordRaw[] = treemenuList.map((router: UserTreeMenuItem) => {
    const isParent = router.pid == 0 && router.children
    const fileName = router.path.match(/\/([^/]*)$/)![1]
    let routes: RouteRecordRaw = {
      path: router.path,
      name: router.name,
      meta: {
        icon: router.icon
      },
      component: modules[`../views${router.path}/${fileName}`],
      redirect: String,
      children: []
    }
    if (isParent) {
      routes.redirect = router.children![0].path;
      routes.component = () =>
        import(`../components/ParentView/ParentView.vue`)
    }

    // 递归处理子路由
    if (routes && router.children) {
      routes.children = generateRouter(router.children);
    }
    return routes
  })
  return newRouters
}
/**
 * @description: 数组扁平化
 * @param {any} target
 * @return {*}
 * @author: Post_Malone
 */
export function flatter(target: any) { 
  if (Array.isArray(target)) {
    let result: any = [];
    target.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatter(item));
      } else {
        result.push(item);
      }
    });
    return result;
  } else {
    return target
  }
}
/**
 * @description: 深拷贝
 * @param {*} target
 * @param {*} map
 * @return {*}
 * @author: Post_Malone
 */
export const deepClone = (target: any, map: any = new Map()) => {
  if (typeof target === 'object' && target !== null) {
    const cache = map.get(target);
    if (cache) {
      return cache;
    }
    const isArray = Array.isArray(target);
    let result: any = isArray ? [] : {};
    map.set(target, result);
    if (isArray) {
      target.forEach((item, index) => {
        result[index] = deepClone(item, map);
      })
    } else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone(target[key], map);
      })
    }
    return result;
  } else {
    return target
  }
}