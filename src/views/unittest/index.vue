<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="测试策略" name="first">
          <Strategy />
        </el-tab-pane>
        <el-tab-pane label="静态测试" name="second">
          <Static />
        </el-tab-pane>
        <el-tab-pane label="动态测试" name="third">
          <Dynamic />
        </el-tab-pane>
        <el-tab-pane label="缺陷版本" name="fourth">
          <Bug />
        </el-tab-pane>


      </el-tabs>
    </el-card>






    
  </div>
</template>

<script>

import Strategy from "./strategy";
import Static from "./static"
import Dynamic from "./dynamic"
import Bug from './bug'

export default {
  name: "unittest",
  components: { Strategy ,Static,Dynamic,Bug},
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