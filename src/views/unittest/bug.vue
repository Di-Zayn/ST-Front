<template>
  <div>  
    
    <div class="main-header">
      
      <p style="margin-top:10px;font-size:20px;">缺陷用例展示如下：</p>
      <div class="button-group">
        <el-button
          class="main-button"
          type="success"
          plain
          @click="doTest"
          :loading="loading"
          >进行测试<i class="el-icon-upload el-icon--right"></i
        ></el-button>
        <!-- <el-button
          @click="reset(value)"
          class="reset-button"
          type="warning"
          plain
          >重置</el-button
        > -->
      </div>
    </div>
    <el-divider content-position="left">IndividualController-login()</el-divider>
    <div class="table1">
      <el-table
        :data="tableData1"
        :height="tableHeight"
        border
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="id"
          label="测试用例编号"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="账号名"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="password"
          width="120"
          label="密码"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="state"
          width="120"
          label="账号状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="expectation"
          label="预期输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="actual"
          label="实际输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="info"
          label="程序运行信息"
          align="center"
        ></el-table-column>
        
        <el-table-column
          prop="time"
          label="测试时间"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    <el-divider content-position="left">IndividualController-signUp()</el-divider>
    <div class="table1">
      <el-table
        :data="tableData2"
        :height="tableHeight"
        border
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="id"
          label="测试用例编号"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="注册邮箱"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="password"
          width="120"
          label="密码"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          width="120"
          label="用户名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="expectation"
          label="预期输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="actual"
          label="实际输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="info"
          label="程序运行信息"
          align="center"
        ></el-table-column>
        
        <el-table-column
          prop="time"
          label="测试时间"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    <el-divider content-position="left">OrganizationController-orglogin</el-divider>
    <div class="table1">
      <el-table
        :data="tableData3"
        :height="tableHeight"
        border
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="id"
          label="测试用例编号"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="账号名"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="password"
          width="120"
          label="密码"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="state"
          width="120"
          label="账号状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="expectation"
          label="预期输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="actual"
          label="实际输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="info"
          label="程序运行信息"
          align="center"
        ></el-table-column>
        
        <el-table-column
          prop="time"
          label="测试时间"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    
   
  </div>



</template>

<script>


export default {
  name: "Bug",
  components: {},
  props: {},
  data() {
    return {
      tableData1:[ {"id":"TS5","username":"null","password":"null","state":1,"expectation":"输入不能为空","actual":"该用户尚未注册","info":"测试不通过","time":"2022-6-23"}],
      tableData2:[{"id":"TS3","email":"null","password":"null","name":"null","expectation":"输入信息不能为空","actual":"注册成功","info":"测试不通过","time":"2022-6-23"}],
      tableData3:[{"id":"TS6","username":"null","password":"null","state":1,"expectation":"输入信息不能为空","actual":"NullPointerException","info":"测试不通过","time":"2022-6-23"}],
     }
  },
  computed: {},
  watch: {},
  created() {
    
    },
  mounted() {
    
  },
  methods: {

    

  },
};
</script>

<style scoped lang="less">
.main-button {
  width: 200px;
  margin-top: 10px;
}
.reset-button {
  width: 200px;
  margin-top: 10px;
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>