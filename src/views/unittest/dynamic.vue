<template>
  <div>  
    
    <div class="main-header">
      
      <p style="margin-top:10px;font-size:20px;">动态测试用例展示如下：</p>
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
    <el-divider content-position="left">ActivityServiceImpl-getEmotionalAnalysis()</el-divider>
    <div class="table1">
      <el-table
        :data="tableData4"
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
          prop="ID"
          label="活动ID"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="size"
          width="120"
          label="活动对应评论数"
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
    <el-divider content-position="left">ActivityServiceImpl-filterActivity()</el-divider>
    <div class="table1">
      <el-table
        :data="tableData5"
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
          prop="genres"
          label="类型"
          width="120"
          align="center"
        ></el-table-column>state
        <el-table-column
          prop="state"
          width="120"
          label="状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="isabletoRe"
          width="120"
          label="可报名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="key"
          width="120"
          label="搜索关键词"
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
import individual_login from "@/mock/unittest/individual_login.json";
import individual_signUp from "@/mock/unittest/individual_signUp.json";
import orglogin from "@/mock/unittest/orglogin.json"
import emo from "@/mock/unittest/emo.json"
import filter from "@/mock/unittest/filter.json"

export default {
  name: "Dynamic",
  components: {},
  props: {},
  data() {
    return {
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
     }
  },
  computed: {},
  watch: {},
  created() {
    this.initTableData1(individual_login);
    this.initTableData2(individual_signUp);
    this.initTableData3(orglogin);
    this.initTableData4(emo);
    this.initTableData5(filter);
    },
  mounted() {
    
  },
  methods: {
    initTableData1(json) {
      this.classState = [];
      this.tableData1 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
      
        this.tableData1.push(newData);
      });

    },
    initTableData2(json) {
      this.classState = [];
      this.tableData2 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
      
        this.tableData2.push(newData);
      });

    },
    initTableData3(json) {
      this.classState = [];
      this.tableData3 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
      
        this.tableData3.push(newData);
      });

    },
    initTableData4(json) {
      this.classState = [];
      this.tableData4 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
      
        this.tableData4.push(newData);
      });

    },
    initTableData5(json) {
      this.classState = [];
      this.tableData5 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
      
        this.tableData5.push(newData);
      });

    },
    doTest_base1(json) {
      
      this.classState = [];
      this.tableData1 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["time"]="2022-6-23";
        this.tableData1.push(newData);
      });
    },
    doTest_base2(json) {
      
      this.classState = [];
      this.tableData2 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["time"]="2022-6-23";
        this.tableData2.push(newData);
      });
    },
    doTest_base3(json) {
      
      this.classState = [];
      this.tableData3 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["time"]="2022-6-23";
        this.tableData3.push(newData);
      });
    },
    doTest_base4(json) {
      
      this.classState = [];
      this.tableData4 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["time"]="2022-6-23";
        this.tableData4.push(newData);
      });
    },
    doTest_base5(json) {
      
      this.classState = [];
      this.tableData5 = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["time"]="2022-6-23";
        this.tableData5.push(newData);
      });
    },
    doTest()
    {
      this.doTest_base1(individual_login);
      this.doTest_base2(individual_signUp);
      this.doTest_base3(orglogin);
      this.doTest_base4(emo);
      this.doTest_base5(filter);
    }
    

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