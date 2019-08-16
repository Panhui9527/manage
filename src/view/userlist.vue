<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="18">
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      border
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="username" label="姓名" width="100"></el-table-column>
      <el-table-column property="email" label="邮箱" width="200"></el-table-column>
      <el-table-column property="mobile" label="电话" width="200"></el-table-column>
      <el-table-column label="用户状态" width="100">
        <!-- slot-scope  已经废弃了  一般用v-slot -->
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="warning" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchParams.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="searchParams.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { users } from "../api/axios";
export default {
  data() {
    return {
      //表格数据
      tableData: [],

      //查询参数
      searchParams: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },

      //数据条数
      total: 0
    };
  },

  methods: {
    //获取用户列表信息
    getuser() {
      users(this.searchParams).then(res => {
        console.log(res);
        this.tableData = res.data.data.users;
        this.total = res.data.data.total;
      });
    },

    //切换用户1页显示条数
    handleSizeChange(size) {
      // console.log(size)
      this.searchParams.pagesize = size;
      this.searchParams.pagenum = 1;
      this.getuser()
    },

    //切换用户页面页码
    handleCurrentChange(page){
        console.log(page)
        this.searchParams.pagenum = page;
        this.getuser()
    }
  },

  created() {
    this.getuser();
  }
};
</script>

<style lang='less' scoped>
.my-bread {
  background-color: #d3dce6;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
}
</style>