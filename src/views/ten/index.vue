<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <SalesQuestion />
        </el-tab-pane>
        <el-tab-pane label="基本流和备选流" name="second">
          <FlowDesign />
        </el-tab-pane>
        <el-tab-pane label="流图" name="third">
          <FlowDiagram />
        </el-tab-pane>

        <el-tab-pane label="场景设计" name="fourth">
          <Scene />
        </el-tab-pane>
        <el-tab-pane label="用例设计" name="fifth">
          <Case />
        </el-tab-pane>


      </el-tabs>
    </el-card>






    
  </div>
</template>

<script>

import SalesQuestion from "./question";
import FlowDesign from "./flowdesign";
import FlowDiagram from "./flowdiagram";
import Scene from "./scene";
import Case from "./case"

export default {
  name: "ten",
  components: { SalesQuestion,FlowDesign,FlowDiagram,Scene,Case},
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