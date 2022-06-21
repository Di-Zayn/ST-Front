<template>
  <div class="system-test">
    <div class="main-header">
      <el-select v-model="value" placeholder="请选择测试方法">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
      </el-select>
<!--      <div class="data-text">日期取2021年5月（共31天）</div>-->
      <div class="button-group">
        <el-button
            @click="openUploadDialog"
            icon="el-icon-upload"
            class="reset-button"
            plain>
          导入文件
        </el-button>
        <el-dialog  :visible.sync="isopened" width="400px" append-to-body>
          <div style="margin-bottom:10px">
            格式要求：只支持xls文件，文件第一行依次是用例序号，通话时间，拖欠次数，期望输出。
            第二行开始正式数据。
          </div>
          <el-upload ref="upload" :limit="1" accept=".xlsx,.xls"
                     action=""
                     :on-change="handleChange"
                     :on-remove="handleRemove"
                     :on-exceed="handleExceed"

                     :auto-upload="false" drag>

            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip" style="color:#ff0000">提示：请注意上述格式要求

            </div>
          </el-upload>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="isopened=false">确 定</el-button>
            <el-button @click="isopened=false">取 消</el-button>
          </div>
        </el-dialog>
        <el-button
            @click="reportDialog=true"
            class="reset-button"
            plain>
          查看报告
        </el-button>

        <el-dialog  title="测试报告"  :visible.sync="reportDialog" width="700px" height="500px" append-to-body  @open="openReportDialog()">
          <el-row>
            <el-col :span="18"><div id="pie" style="width: 400px;height: 250px;"></div></el-col>
            <el-col :span="6">
              <div id="testtime"> 运行时间:100ms</div>
              <div id="rate"> 测试成功率: {{this.rate}}%</div></el-col>
          </el-row>
          <el-divider content-position="right">错误用例</el-divider>
          <div class="error_info_table">
            <el-table
                :data="error_info"
                :height="tableHeight"
                border
                style="width: 100%"
                v-loading="loading"
                :row-class-name="tableRowClassName"
            >
              <el-table-column
                  prop="id"
                  label="测试用例编号"
                  width="120"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="telTime"
                  label="通话分钟数"
                  width="120"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="delayPayTimes"
                  label="累计未按时缴费的次数"
                  width="120"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="expectedResult"
                  label="预期输出"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="actual"
                  label="实际输出"
                  align="center"
              ></el-table-column>

            </el-table>
          </div>
          <!-- <div>
            <div id="pie" style="width: 400px;height: 300px;">
            </div>
            <div>
              运行时间
            </div>
          </div> -->

        </el-dialog>

        <el-button
            class="main-button"
            type="success"
            plain
            @click="doTest"
            :loading="loading"
        >进行测试<i class="el-icon-upload el-icon--right"></i
        ></el-button>
        <el-button @click="reset(value)" class="reset-button" type="warning" plain>重置</el-button>
      </div>
    </div>

    <el-divider content-position="left">测试用例</el-divider>

    <div class="main-table">
      <el-table
          :data="tableData"
          :height="tableHeight"
          border
          style="width: 100%;"
          v-loading="loading"
          :row-class-name="tableRowClassName"
      >
        <el-table-column
            prop="id"
            label="测试用例编号"
            width="120"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="telTime"
            label="本月的通话分钟数X（分钟）"
            width="240"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="delayPayTimes"
            label="本年度至本月的累计未按时缴费的次数Y（次）"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="expectedResult"
            label="每月的电话总费用预期输出"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="actual"
            label="每月的电话总费用实际输出"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="info"
            label="程序运行信息"
            align="center"
        ></el-table-column>
        <el-table-column prop="state" label="测试结果" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.state == true" class="icon-svg">
              <i class="el-icon-check"></i><span>测试通过</span>
            </div>
            <div v-if="scope.row.state == false" class="icon-svg">
              <i class="el-icon-close"></i><span>测试未通过</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            prop="time"
            label="测试时间"
            align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mock_1_json from "@/mock/cash/cash_mock_1.json";
import mock_2_json from "@/mock/cash/cash_mock_2.json";
import mock_3_json from "@/mock/cash/cash_mock_3.json";
import mock_4_json from "@/mock/cash/cash_mock_4.json";
import { testcash } from "@/api/cashtest.js";
import * as echarts from "echarts";
export default {
  name: "SystemTest",
  components: {},
  props: ["parentHeight"],
  data() {
    return {
      options: [
        { value: "1", label: "边界值分析" },
        { value: "2", label: "等价类测试" },
        { value: "3", label: "决策表测试" },
        { value: "4", label: "导入文件测试" },
      ],
      value: "1",
      tableData: [],
      loading: false,
      classState: [],
      isopened:false,
      reportDialog:false,
      pieData:[],
      error_info:[],
      rate:1.0,
      json:{},
    };
  },
  computed: {
    tableHeight(){
      return 465;
    }
  },
  watch: {
    value:{
      handler(newVal){
        this.reset(newVal);
      },
      immediate:false,
    }
  },
  created() {},
  mounted() {
    this.initTableData(mock_1_json);
    // this.json = mock_1_json;
  },
  methods: {
    openUploadDialog(){
      this.isopened=true;
    },
    openReportDialog(){
      this.$nextTick(() => {
        //  执行echarts方法
        this.draw()
      })
    },
    initTableData(json){
      this.classState = [];
      this.tableData = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          // if(key != "X" || key != "Y"){
          //
          // }
          newData[key] = element[key];
        }
        newData["actual"] = "";
        newData["info"] = "";
        newData["state"] = null;
        this.tableData.push(newData);
        console.log(this.tableData)
      });
    },
    tableRowClassName({ row, rowIndex }) {
      return this.classState[rowIndex];
    },
    //上传文件时处理方法
    handleChange(file, fileList){
      this.fileTemp = file.raw;
      if(this.fileTemp){
        // if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        //     || (this.fileTemp.type == 'application/vnd.ms-excel')){
        //       console.log("yes")
        //     this.importfxx(this.fileTemp);
        // } else {
        //     this.$message({
        //         type:'warning',
        //         message:'附件格式错误，请删除后重新上传！'
        //     })
        // }
        console.log("yes")
        this.importfile(this.fileTemp);
      } else {
        this.$message({
          type:'warning',
          message:'请上传附件！'
        })
      }
    },
    draw(){
      var chartDom = document.getElementById('pie');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.pieData,
          }
        ]
      };
      option && myChart.setOption(option);
    },
    //超出最大上传文件数量时的处理方法
    handleExceed(){
      this.$message({
        type:'warning',
        message:'超出最大上传文件数量的限制！'
      })
      return;
    },
    //移除文件的操作方法
    handleRemove(file,fileList){
      this.fileTemp = null
    },
    importfile (obj) {
      console.log(obj);
      console.log(this.tableData)
      const reader = new FileReader()
      const _this = this
      reader.readAsArrayBuffer(obj)
      reader.onload = function () {
        const buffer = reader.result
        const bytes = new Uint8Array(buffer)
        const length = bytes.byteLength
        let binary = ''
        for (let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i])
        }
        // const XLSX = require('xlsx')

        console.log("onload");
        const wb = XLSX.read(binary, {
          type: 'binary'
        })
        console.log("onload");
        const outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        this.data = [...outdata]
        const arr = []
        this.data.map(v => {
          const obj = { }
          obj.id = v.id
          obj.telTime = v.telTime
          obj.delayPayTimes =v.delayPayTimes
          obj.expectedResult=v.expectedResult
          // console.log(obj.id);

          this.tableData = [];
          obj["actual"] = "";
          obj["info"] = "";
          obj["state"] = null;
          arr.push(obj)
          // console.log(arr)
        })
        _this.tableData = arr
        console.log(this.tableData)
        this.isopened=false;
      }
    },

    doTest() {
      let newData = {};
      if (this.value === "1") {
        newData = {
          cash_test_list: mock_1_json,
        };
      } else if(this.value==="2"){
        newData = {
          cash_test_list: mock_2_json,
        };
      } else if(this.value==="3"){
        newData = {
          cash_test_list: mock_3_json,
        };
      }
      else {
        newData = {
          cash_test_list: this.tableData,
        };
      }
      console.log("=======")
      console.log(typeof newData.cash_test_list);
      //newData=JSON.stringify(newData);
      console.log(typeof newData)
      console.log(newData)
      const _this = this;
      this.loading = true;
      console.log(newData.cash_test_list);
      testcash(JSON.stringify(newData.cash_test_list))
          .then(
              res => {
                console.log(res)
                this.pieData=res.data.pieData
                console.log(this.pieData)
                this.error_info=res.data.error_info
                console.log(this.error_info)
                this.rate=res.data.pieData[0].value/(res.data.pieData[0].value+res.data.pieData[1].value).toFixed(2)
                this.rate=res.rate*100
                _this.tableData.forEach((item, index) => {
                  let responseObject = res.data.result_list[index];
                  item.actual = responseObject.actualOutput;
                  item.info = responseObject.info;
                  item.state = responseObject.testResult == "Success" ? true : false;
                  item.time = responseObject.testTime;
                  _this.classState[index] = item["state"]
                      ? "success-row"
                      : "error-row";
                });
                console.log(_this.tableData)
                this.$message({
                  message: '测试成功',
                  type: 'success'
                });
                _this.loading = false;
              })
          .catch((err) => {
            _this.$message.error("Server Error");
            _this.loading = false;
          });
    },
    reset(value){
      if(value === "1"){
        this.initTableData(mock_1_json);
      }
      else if(value === "2"){
        this.initTableData(mock_2_json);
      }
      else if(value ==="3"){
        this.initTableData(mock_3_json);
      }
      else if(value ==="4"){
        this.initTableData(mock_4_json);
      }
      else{
        this.initTableData(mock_1_json);
      }
    }
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
#pie{
  position: relative;
  height: -20px;
  left:-80px;
}
#testtime{
  position: relative;
  top: 80px;
  left:-150px;
  width: 200px;
  font-size: 18px;
}
#rate{
  position: relative;
  top: 80px;
  left:-150px;
  width: 200px;
  margin-top:10px;
  font-size: 18px;
}
.main-button {
  width: 200px;
  margin-top: 10px;
}
.reset-button {
  width: 200px;
  margin-top: 10px;
}
.main-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
}
.main-table{
  height: 100%;
  display: flex;
  align-items: center;
  overflow:auto
}
</style>
