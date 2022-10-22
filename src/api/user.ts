/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\api\user.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 19:21:02
 */

import Axios from '../http/axios'
import { UserMenuItem } from '../interface/menu'
import router from '../router';
/**
 * 
 * @description: 用户登录 
 * @return {*}
 * @author: Post_Malone
 * @interface IUserLoginReq
 */
export interface IUserLoginReq {
  username: string;
  password: string;
  loginType: 0 | 1 | 2 | null;
}
export interface IUserLoginRes {
  token: string;
  uid: string;
  username: string;
}
/**
 * @description: 用户请求登录
 * @param {IUserLoginReq} data
 * @return {*}
 * @author: Post_Malone
 */
export const userLoginApi = (data: IUserLoginReq) => {
  return Axios.request<IUserLoginRes>({
    url: '/login',
    method: 'post',
    data
  }).catch((err: any) => {
    throw err
  })
}

export const getUserMenu = (userType: number) => {
  return Axios.request({
    url: '/UserMenu',
    method: 'post',
    data: { userType }
  }).catch((err) => {
    localStorage.clear()
    router.replace('/login')
  })
}
