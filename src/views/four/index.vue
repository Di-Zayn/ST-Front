<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <span style="font-size:24px;"><b>&nbsp;第5题</b></span>
          <div style="font-size:16px;">
            <p >讨论题：边界值测试可以适用于function(method) level，class level,，system level，分析电商平台系统测试时考虑的边界值情况。</p>

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
  name: "four",
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
