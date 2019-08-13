<template>
  <div class="my-inx">
    <div class="box">
      <el-container style="height:100%">
        <el-header>
          <div class="title">
            <img src="../assets/img/logo.png" alt />
            <h2>最好的vue管理系统</h2>
            <a href="#">退出</a>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <div class="left">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">
                      <i class="el-icon-menu"></i>用户列表
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>权限管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">
                      <i class="el-icon-menu"></i>角色列表
                    </el-menu-item>
                    <el-menu-item index="2-2">
                      <i class="el-icon-menu"></i>权限列表
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">
                      <i class="el-icon-menu"></i>商品列表
                    </el-menu-item>
                    <el-menu-item index="3-2">
                      <i class="el-icon-menu"></i>分类参数
                    </el-menu-item>
                    <el-menu-item index="3-3">
                      <i class="el-icon-menu"></i>商品分类
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">
                      <i class="el-icon-menu"></i>订单列表
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据统计</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">
                      <i class="el-icon-menu"></i>数据报表
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
          </el-aside>
          <el-main>
            <div>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>数据统计</el-breadcrumb-item>
                <el-breadcrumb-item>数据报表</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='less' scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

/* body > .el-container {
    margin-bottom: 40px;
  } */

.my-inx {
  height: 100%;

  .box {
    height: 100%;

    .title img {
      // margin-left: 20px;
      float: left;
    }
    .title h2 {
      display: inline-block;
      text-align: center;
      color: #fff;
    }
    .title a {
      float: right;
      color: orange;
      font-size: 14px;
    }
  }
}
</style>