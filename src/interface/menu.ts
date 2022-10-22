/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\interface\menu.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 14:59:58
 */
export interface UserMenuItem {
  _id: string;
  rid: number;
  pid: number;
  path: string;
  name: string;
  icon: string;
  title: string
}

export interface UserTreeMenuItem {
  _id: string;
  children?: UserTreeMenuItem[];
  name: string | undefined;
  path: string;
  pid: number;
  icon: string;
  rid: number;
  title: string;
  link?: string;
}

export interface IUserRouterItem {
  name?: string | undefined;
  path: string;
  redirect?: string;
  meta?: { icon: string };
  children?: IUserRouterItem[];
  component?: any;
}