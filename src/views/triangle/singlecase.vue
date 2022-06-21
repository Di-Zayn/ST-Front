<template>
  <div class="single-case">
    <el-form
      class="single-form"
      :label-position="labelPosition"
      label-width="400px"
      :model="formLabelAlign"
    >
      <el-form-item label="第一条边的值">
        <el-input v-model="formLabelAlign.A"></el-input>
      </el-form-item>
      <el-form-item label="第二条边的值">
        <el-input v-model="formLabelAlign.B"></el-input>
      </el-form-item>
      <el-form-item label="第三条边的值">
        <el-input v-model="formLabelAlign.C"></el-input>
      </el-form-item>
      <el-form-item label="程序预期输出">
        <el-input v-model="formLabelAlign.expectation"></el-input>
      </el-form-item>
    </el-form>
          <el-button
        class="main-button"
        type="success"
        plain
        @click="doTest"
        :loading="loading"
        >进行测试<i class="el-icon-upload el-icon--right"></i
      ></el-button>
        <div>
    <span>实际输出：{{actual}}</span>
    <el-divider direction="vertical"></el-divider>
    <span>运行信息：{{info}}</span>
    <el-divider direction="vertical"></el-divider>
          <span>测试结果：{{result}}</span>
          <el-divider direction="vertical"></el-divider>

        </div>
  </div>
</template>

<script>
import { testtriangle } from "@/api/triangletest.js";
export default {
  name: "SingleCase",
  components: {},
  props: {},
  data() {
    return {
        actual:"",
  info:"",
      result:"",
      labelPosition: 'right',
        formLabelAlign: {
          A: "",
          B: "",
          C: "",
          expectation: ""
        }, 
        date:"",
        loading:false,

    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    doTest(){
      let formdata = {
        id:"TS1",
        a:this.formLabelAlign.A,
        b:this.formLabelAlign.B,
        c:this.formLabelAlign.C,
        expectedOutput:this.formLabelAlign.expectation,
      }
      let data = {
        triangle_test_list:[formdata],
      }
      console.log(JSON.stringify(data.triangle_test_list))
      testtriangle(JSON.stringify(data.triangle_test_list)).then((res)=>{
        console.log(res)
        this.actual = res.data.result_list[0].actualOutput;
        this.info = res.data.result_list[0].info;
        this.result = res.data.result_list[0].testResult;
      })

    }
  },
};
</script>

<style scoped>
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
  width:100%;

}
.box-card {
  padding: 0;
}
.single-form{
  width:600px;
  top:50%;
  left:50%;
}
</style>
