<template>
  <div class="single-case">
    <el-form
      class="single-form"
      :label-position="labelPosition"
      label-width="400px"
      :model="formLabelAlign"
    >
      <el-form-item label="本月的通话分钟数（分钟）">
        <el-input v-model="formLabelAlign.time"></el-input>
      </el-form-item>
      <el-form-item label="本年度至本月的累计未按时缴费的次数（次）">
        <el-input v-model="formLabelAlign.num"></el-input>
      </el-form-item>
      <el-form-item label="月份">
        <el-date-picker v-model="date" type="month" placeholder="选择月"
        value-format="yyyy-MM" >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="每月的电话总费用预期输出">
        <el-input v-model="formLabelAlign.expectedOutput"></el-input>
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
import { testcash } from "@/api/cashtest.js";
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
          time: 0,
          num: 0,
          expectedOutput: 0
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
        year:this.date.split("-")[0],
        month:this.date.split("-")[1],
        time:this.formLabelAlign.time,
        num:this.formLabelAlign.num,
        expectedOutput:this.formLabelAlign.expectedOutput,
      }
      console.log(formdata)
      let data = {
        cash_test_list:[formdata],
      }
      console.log(JSON.stringify(data.cash_test_list))

      testcash(JSON.stringify(data.cash_test_list)).then((res)=>{
                console.log(res)
        this.actual = res.data.result_list[0].actualOutput;
        this.info = res.data.result_list[0].info;
        this.result = res.data.result_list[0].testResult;
      }).catch((err)=>{
        console.log(err)
        this.$message.err("Server Error");
      })

    }
  },
};
</script>

<style scoped>
.main-button {
  width:100%;
}
.single-form{
  width:600px;
  top:50%;
  left:50%;
}
</style>
