<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <span style="font-size:24px;"><b>&nbsp;第3题</b></span>
          <div style="font-size:16px;">

            <p >在一销售管理系统中，其中的一个模块负责对公司员工进行年终考评。相关描述如下：</p>
            <p> 考评综合考虑职工在公司工作时间长短（计年）、每年请假的次数（不能超过20天，20天以上，包括20天，则免于年终考评）、员工在公司的级别（分1，2，3，4，5个级别）及本年度的销售总额，考评的结果最高以5分计，公司成立于2000年初，该软件的设计使用周期到2025年底，请回答下列问题：</p>
            <p>(1)	用基本边界值的测试方法，一共有多少测试用例；最坏情况边界值有多少测试用例。</p>
            <p>(2)	根据健壮的边界值测试法，写出“工作时间长短”为非正常值情况下的测试用例。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="问题解答" name="second">
          <SalesQuestion />
        </el-tab-pane>

      </el-tabs>
    </el-card>







  </div>
</template>

<script>

import SalesQuestion from "./question";
export default {
  name: "two",
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
