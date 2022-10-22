/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\types\shims-axios.d.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-18 16:08:08
 */
import { AxiosRequestConfig } from 'axios';
/**
 * @description: 自定义扩展 axios 模块
 * @return {*}
 * @author: Post_Malone
 */
declare module 'axios' {
  export interface AxiosInstance {
      <T = any>(config: AxiosRequestConfig): Promise<T>;
      request<T = any>(config: AxiosRequestConfig): Promise<T>;
      get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
      delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
      head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
      post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
      put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
      patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}