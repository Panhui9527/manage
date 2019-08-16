<template>
  <el-container style="height:100%">
    <el-header class="my-header">
      <img src="../assets/img/logo.png" alt />
      <h2>风雨过后能见彩虹</h2>
      <a href="#" @click.prevent="goout">退出</a>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" unique-opened router>
          <el-submenu v-for="(item,index) in itemList" :index="'' +item.order" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.path">
              <i class="el-icon-menu"></i>
              {{subItem.authName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//导入左侧菜单请求
import { menus } from "../api/axios";

export default {
  data() {
    return {
      itemList: []
    };
  },

  methods: {
    //退出
    goout() {
      this.$confirm("是否确认退出?", "提示", {
        type: "warning"
      })
        .then(() => {
          //确认推出便删除token
          sessionStorage.clear();
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },

  created() {
    //获取左侧项目详情
    menus().then(res => {
      console.log(res);
      this.itemList = res.data.data;
    });
  }
};
</script>

<style lang='less' scoped>
.my-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 16px;
    color: orange;
  }
};

.my-main {
    padding: 0 20px;
}

</style>