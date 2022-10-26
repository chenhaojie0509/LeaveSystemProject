/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\store\userStore.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 17:01:17
 */
import { defineStore } from 'pinia'
import { getUserMenu } from '../api/user';
import useLocalStorage from '../hooks/useLocalStorage'
import { UserMenuItem, UserTreeMenuItem, INavItem } from '../interface/menu'
import { getUserTreeMenus, flatter } from '../utils/index'

export const userStore = defineStore('user', {
  state: () => {
    return {
      dark: false,
      collapse: false,
      userMenuList: [] as UserMenuItem[],
      userRouters: [] as UserTreeMenuItem[],
      navList: [{ title: "首页", path: "/index/home" }, { title: "demo", path: "/index/demo" }] as INavItem[],
    }
  },
  actions: {
    /**
     * @description: 获取用户菜单数组
     * @return {*}
     * @author: Post_Malone
     */
    async getUserMenuList() {
      const { getLocalStorage } = useLocalStorage()
      this.userMenuList = await getUserMenu(getLocalStorage('userType')) as UserMenuItem[]
    },

    /**
     * @description: 获取用户的菜单数组并转化为树形菜单
     * @param {number} userType
     * @return {*}
     * @author: Post_Malone
     */
    async setUserRouters(userType: number) {
      const { data } = await getUserMenu(userType)
      const menuList = data
      this.userMenuList = menuList
      this.userRouters = getUserTreeMenus(menuList)
    },

    /**
     * @description: 关闭 nav 导航
     * @param {number} index
     * @return {*}
     * @author: Post_Malone
     */
    closeNav(index: number) {
      this.navList.splice(index, 1);
    },

    setNavList(path: string) {
      let menuList: any[] = [];
      const navItem = {} as INavItem;
      this.userRouters.forEach((item: UserTreeMenuItem) => {
        menuList.push(item.children)
      })
      // 扁平化，变成一维
      menuList = flatter(menuList);
      menuList.forEach((item: UserTreeMenuItem) => {
        const navPath = '/index' + item.path
        if (item && navPath == path) {
          navItem.title = item.title;
          navItem.path = navPath;
        }
      });
      const isBeing = this.navList.some((item: INavItem) => item.path == navItem.path);
      if (!isBeing && navItem && navItem.path) {
        this.navList.push(navItem)
      }


    },

    /**
     * @description: 关闭当前标签和首页标签之外的所有标签
     * @return {*}
     * @author: Post_Malone
     */
    cloneOtherNav(currrentPath: string) {
      this.navList = [{ title: "首页", path: "/index/home" }];
      this.setNavList(currrentPath);
    },
  }
})

