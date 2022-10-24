<!--
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_servesd:\JavaScriptWorkspace\leaveSystemProject\src\views\Login\Login.vue
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-24 14:39:02
-->
<template>
  <div class="login-content">
    <el-card class="box-card">
      <h2 class="title">请假系统</h2>
      <el-form
        :model="userLoginInfo"
        :rules="rules"
        ref="userLoginInfoRef"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            size="large"
            placeholder="学号/工号:"
            autocomplete="off"
            prefix-icon="UserFilled"
            v-model="userLoginInfo.username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            size="large"
            type="password"
            show-password
            placeholder="密码:"
            prefix-icon="Key"
            autocomplete="off"
            v-model="userLoginInfo.password"
          />
        </el-form-item>
        <el-form-item prop="loginType">
          <span style="margin-right: 20px"><b>登录类型: </b></span>
          <el-radio-group v-model="userLoginInfo.loginType">
            <el-radio-button :label="0">学生</el-radio-button>
            <el-radio-button :label="1">教师</el-radio-button>
            <el-radio-button :label="2">管理员</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button
            class="submit-btn"
            @click="submitForm(resetForm(userLoginInfoRef))"
            type="primary"
            >登 录</el-button
          >
          <el-button
            class="submit-btn"
            @click="resetForm(userLoginInfoRef).clearForm()"
            >重 置</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue";
import { IUserLoginReq, IUserLoginRes, userLoginApi } from "../../api/user";
import { rules } from "./checkRules";
import userLoging from "../../hooks/userLogin";
import useLocalStorage from "../../hooks/useLocalStorage";
import router from "../../router";

const { isLoging, setLoging } = userLoging();
const { setLocalStorage } = useLocalStorage();
const userLoginInfoRef = ref();
const userLoginInfo = reactive<IUserLoginReq>({
  username: "",
  password: "",
  loginType: null,
});
/**
 * @description: 重置表单
 * @param {*} formEl
 * @return {*}
 * @author: Post_Malone
 */
const resetForm = (formEl: any) => {
  const clearForm: Function = () => {
    if (!formEl) return;
    formEl.resetFields();
  };
  return {
    clearForm,
  };
};

/**
 *
 * @description: 提交表单登录
 * @return {*}
 * @author: Post_Malone
 */
const submitForm = async (resetForm: any) => {
  const { clearForm } = resetForm;
  userLoginInfoRef.value.validate(async (valid: boolean) => {
    valid &&
      setLoging<IUserLoginReq, IUserLoginRes>(userLoginApi, userLoginInfo)
        .then((res) => {
          const { data } = res;
          console.log(typeof userLoginInfo.loginType);
          setLocalStorage("token", data.token);
          setLocalStorage("userType", userLoginInfo.loginType);
          setLocalStorage("username", userLoginInfo.username);
          router.replace("/");
        })
        .catch((err) => {
          clearForm();
        });
  });
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 3em;
  line-height: 1.1;
  margin-bottom: 0.7em;
}
.box-card {
  width: 420px;
  height: 300px;
  padding: 0px 15px 40px 15px;
  position: absolute;
  opacity: 0.85;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.login-content {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
.submit-btn {
  width: 180px;
  height: 40px;
  font-size: 15px;
  margin-top: 15px;
}
</style>