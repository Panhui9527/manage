<template>
  <div class="login">
    <div class="from-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <h2>用户登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model.trim="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="btn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//导入login组件 
import {login} from "../api/axios";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户账号", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 4, max: 9, message: "长度在 4 到 9 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    //点击登录
    submitForm(formName) {
      this.$refs[formName].validate(valid => { 

          //输入格式正确
        if (valid) {

          //调用包装的axios登录函数
          login(this.ruleForm)
          .then(res => {
            //密码或账号错误
            // console.log(res)
            if (res.data.meta.status == 400) {

              this.$message.error(res.data.data.msg);

              //输入正确
            } else if (res.data.meta.status == 200) {
                //保存token
              window.localStorage.setItem('token', res.data.data.token);

              this.$message.success(res.data.meta.msg);

              //跳转index
              this.$router.push("/index");
            }
          });

          //输入格式错误
        } else {

          this.$message.error("请按提示正确输入信息");
          
          return false;
        }
      });
    }
  }
};
</script>


<style lang='less' scoped>
// 使用less并局部css
.login {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;

  .from-box {
    padding: 40px;
    width: 420px;
    height: 350px;
    background-color: #fff;

    h2 {
      margin-bottom: 15px;
    }

    .btn {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>