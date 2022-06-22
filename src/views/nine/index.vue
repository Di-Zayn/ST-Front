<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <span style="font-size:24px;"><b>&nbsp;第15题</b></span>
          <div style="font-size:16px;">

            <p >分析或查阅得到正确的ATM的系统状态图，再基于state transition testing分析出transition tree，最后设计出逻辑测试用例。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="状态图" name="2">
          <img style="width:60%;height:60%;" src="./3.png"/>

        </el-tab-pane>
        <el-tab-pane label="State Transition" name="3">
          <img src="./4.png"/>

        </el-tab-pane>
        <el-tab-pane label="用例设计" name="4">
          <SalesQuestion />

        </el-tab-pane>


      </el-tabs>
    </el-card>







  </div>
</template>

<script>

import SalesQuestion from "./question";
export default {
  name: "nine",
  components: { SalesQuestion },
  props: {},
  data() {
    return {
      options: [
      ],
      value: "选项1",
      tableData: [],
      loading: false,
      classState: [],
      stateflag: false,
      activeName: "first",
      isFirst:true,
      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {


  },
  methods: {

  },
};





</script>




<style scoped lang="less">
/deep/ .el-table .error-row {
  background: #fff0f0;
}
/deep/ .el-table .success-row {
  background-color: #f7fff9;
}
.item {
  margin-bottom: 10px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.main-form {
  margin-top: 10px;
}
.main-button {
  width: 100%;
  margin-top: 10px;
}
.box-card {
  padding: 0;
}
.single-form{
  width:600px;
  top:50%;
  left:50%;
}
.block{

}
</style>
