<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <SalesQuestion />
        </el-tab-pane>
        <el-tab-pane label="问题解答" name="2">
          <div style="font-size:16px;">
            <p>A:有效等价类{0000，0001，0010，0011、0100，0101，0110，0111，1000，1001}，无效等价类{x<4bit,x>4bit,x=4bit但不在10种中}</p>
            <p>B:有效等价类{x=64bit}，无效等价类{x<64bit,x>64bit}</p>
            <p>C:有效等价类{现金查询，支票查询，存款，取款}，无效等价类{其他信息}</p>
            <p>D:有效等价类{100bit<=x<=999bit}，无效等价类{x<100bit,x>999bit}</p>
            <p>E:有效等价类{200bit<=x<=500bit,600bit<=x<=900}，无效等价类{x<200bit,500bit<x<600bit,x>900bit}</p>
            <p>F:有效等价类{x=六位字符串}，无效等价类{x<六位字符串,x>六位字符串}</p>
            <p>G:有效等价类{x=256bit}，无效等价类{x<256bit,x>256bit}</p>
            <p>强一般等价类求笛卡尔积，共10*1*4*1*2*1*1=80个</p>
          </div>

        </el-tab-pane>


      </el-tabs>
    </el-card>







  </div>
</template>

<script>

import SalesQuestion from "./question";
export default {
  name: "seven",
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
