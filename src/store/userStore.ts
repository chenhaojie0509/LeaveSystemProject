/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\store\userStore.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-21 10:25:43
 */
import { defineStore } from 'pinia'
import { getUserMenu } from '../api/user';
import useLocalStorage from '../hooks/useLocalStorage'
import { UserMenuItem, UserTreeMenuItem, } from '../interface/menu'
import { getUserTreeMenus, flatter } from '../utils/index'

export const userStore = defineStore('user', {
  state: () => {
    return {
      dark: false,
      collapse: false,
      userMenuList: [] as UserMenuItem[],
      userRouters: [] as UserTreeMenuItem[]
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
      const { data  } = await getUserMenu(userType)
      const menuList = data
      this.userMenuList = menuList
      this.userRouters = getUserTreeMenus(menuList)
    },
  }
})

