/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\http\axios.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 19:29:12
 */
/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\http\axios.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-06 21:00:45
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import useLocalStorage from "../hooks/useLocalStorage";
import { ElMessage } from 'element-plus'
import router from '../router/index'

const { getLocalStorage } = useLocalStorage()
const Axios = axios.create({
  baseURL: 'http://127.0.0.1:7001'
})

// 过滤器
Axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.url === '/login') return config;
  if (localStorage.token) {
    config.headers!.Authorization = "Bearer " + getLocalStorage("token");
  } 
  return config
}, function (err: Error) {
  return Promise.reject(err);
})

//请求拦截器
Axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: any) => {
    if (err.response.data) {
      ElMessage({
        showClose: true,
        message: err.response.data.error,
        grouping: true,
        type: "error",
      });
      // 接口鉴权出错 跳至登录页
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userType");
        router.replace("/login");
      }
    }

    return Promise.reject(err);
  }
);

export default Axios