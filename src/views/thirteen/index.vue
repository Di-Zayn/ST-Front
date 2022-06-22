<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <SalesQuestion />
        </el-tab-pane>
        <el-tab-pane label="流程图" name="second">
          <img src="./G.png"/>
        </el-tab-pane>
        <el-tab-pane label="语句覆盖" name="third">
          <img src="./1.png"/>
        </el-tab-pane>
        <el-tab-pane label="判断覆盖" name="4">
          <img src="./2.png"/>
        </el-tab-pane>
        <el-tab-pane label="所有条件" name="5">
          <el-table
              :data="questionData"
              style="width: 60%;font-size:20px; margin-left: 20px"
          >
            <el-table-column
                prop="con"
                label="条件"
                width="300"
                align="center">
            </el-table-column>
            <el-table-column
                prop="t"
                label="真"
                width="240"
                align="center">
            </el-table-column>
            <el-table-column
                prop="f"
                label="假"
                align="center">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="条件覆盖" name="6">
          <img src="./3.png"/>
        </el-tab-pane>
        <el-tab-pane label="条件判断覆盖" name="7">
          <img src="./4.png"/>
        </el-tab-pane>
        <el-tab-pane label="条件组合覆盖" name="8">
          <img src="./5.png"/>
          <img src="./6.png"/>
        </el-tab-pane>


      </el-tabs>
    </el-card>







  </div>
</template>

<script>

import SalesQuestion from "./question";
export default {
  name: "thirteen",
  components: { SalesQuestion },
  props: {},
  data() {
    return {
      questionData:[{
        con:"销售额Sales>200",
        t:"T1",
        f:"F1",
      },{
        con:"请假天数LeaveDays<=10 ",
        t:"T2",
        f:"F2",
      },
        {
          con:"现金到账CashGot<=0.85",
          t:"T3",
          f:"F3",
        },
        {
          con:"现金到账CashGot>=0.6",
          t:"T4",
          f:"F4",
        },
        {
          con:"销售额Sales<0",
          t:"T5",
          f:"F5",
        },
        {
          con:"请假天数LeaveDays<0",
          t:"T6",
          f:"F6",
        },
        {
          con:"现金到账CashGot<0",
          t:"T7",
          f:"F7",
        },],
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
