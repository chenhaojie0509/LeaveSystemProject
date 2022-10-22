/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\hooks\userLogin.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-11 19:38:45
 */
import { ref } from 'vue'
import { ElMessage } from "element-plus";
/**
 * @description: 用户登录状态
 * @return {*}
 * @author: Post_Malone
 */
const userLoging = () => {
  const isLoging = ref<boolean>(false);
  // (data: T) => Promise<D>
  async function setLoging<T, D>(loginApi: Function, data: T){
    try {
      isLoging.value = true;
      const result = await loginApi(data);
      isLoging.value = false;
      ElMessage({
        message: "登录成功",
        type: "success",
      });
      return result
    } catch (err: any) {
      isLoging.value = false;
      // console.log(err.response);
      // throw new Error(err.response.data.error);
      return Promise.reject(err.response.data.error)
    }
  }

  return {
    isLoging,
    setLoging
  }
}

export default userLoging