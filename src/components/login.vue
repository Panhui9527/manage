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
        if (valid) {
            console.log(this.ruleForm.username)
            this.$axios.post('login',{
                username : this.ruleForm.username,
                password : this.ruleForm.password
            })
            .then(res=>{
                console.log(res)
                if(res.data.meta.status == 400) {
                    this.$message.error('账号或密码错误')
                }else if(res.data.meta.status == 200) {
                    this.$message.success(res.data.meta.msg);
                    this.$router.push('/index')
                }
            })
        } else {
        //   console.log("error submit!!");
          this.$message.error('请按提示正确输入信息');
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

    h2{
        margin-bottom: 15px
    }

    .btn{
        margin-top: 20px;
        width: 100%;
    }
  }
}
</style>