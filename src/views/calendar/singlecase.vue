<template>
  <div class="single-case">
    <el-form
      class="single-form"
      :label-position="labelPosition"
      label-width="400px"
      :model="formLabelAlign"
    >
      <el-form-item label="年份">
        <el-input v-model="formLabelAlign.year"></el-input>
      </el-form-item>
      <el-form-item label="月份">
        <el-input v-model="formLabelAlign.month"></el-input>
      </el-form-item>
      <el-form-item label="天数">
        <el-input v-model="formLabelAlign.day"></el-input>
      </el-form-item>
      <el-form-item label="预期输出">
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
    <div class="actualInput">实际输出：{{actual}}</div>
    
    <div class="result">运行信息：{{info}}</div>
  </div>
  </div>
</template>

<script>

import { testcalendar } from "@/api/calendartest.js";

export default {
  name: "SingleCase",
  components: {},
  props: {},
  data() {
    return {
      actual:"",
      info:"",
      labelPosition: 'right',
        formLabelAlign: {
          year: 0,
          month: 0,
          day: 0,
          expectation:0,
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
        id: "TS1",
        year: this.formLabelAlign.year,
        month: this.formLabelAlign.month,
        day:this.formLabelAlign.day,
        expectation: this.formLabelAlign.expectation,
      }
      let data = {
        calendar_test_list:[formdata],
      }
      testcalendar(JSON.stringify(data.calendar_test_list)).then((res)=>{
        console.log(res.data)
        this.actual = res.data.result_list[0].actual;
        this.info = res.data.result_list[0].test_result;
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
.actualInput{
  left:-200px;
  text-align: center; 
  position: relative;
  margin-top: 10px;
}
.result{
  left:-200px;
  text-align: center; 
  position: relative;
  margin-top: 10px;
}

</style>
