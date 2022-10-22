/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject\src\views\Login\checkRules.ts
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-08 15:03:27
 */
import { reactive } from 'vue'

export const checkUsername = (rule: any, value: string | any[], callback: any) => {
  // console.log(value);
  if (value === '' || value.length < 5) {
    callback(new Error("用户名必须大于5位数"));
  } else {
    callback()
  }
}

export const checkPassword = (rule: any, value: string | any[], callback: any) => {
  // console.log(value);
  if (value === '' || value.length < 5) {
    callback(new Error("密码长度不得少于5位"));
  } else {
    callback()
  }
}
export const checkLoginType = (rule: any, value: number, callback: any) => {
  if (value === null) {
    callback(new Error("登陆类型不可为空"));
  } else if (value === 0 || value === 1 || value === 2 ) { 
    callback()
  } 
  else {
    callback(new Error("登陆类型错误"));
  }
}
export const rules = reactive({
  username: [{ validator: checkUsername, trigger: "blur" }],
  password: [{ validator: checkPassword, trigger: "blur" }],
  loginType: [{ validator: checkLoginType }]
});