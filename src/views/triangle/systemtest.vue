<template>
  <div class="system-test">
    <div class="main-header">
      <el-select v-model="value" placeholder="请选择测试方法">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <div class="button-group">
        <el-button
            @click="openUploadDialog"
            icon="el-icon-upload"
            class="reset-button"
            plain
        >导入文件</el-button
        >
        <!-- :on-change="handleChange" -->
        <el-dialog  :visible.sync="isopened" width="400px" append-to-body>
          <div style="margin-bottom:10px">
            格式要求：只支持xls文件，文件第一行依次是用例序号，三角形的各条边，期望输出。
            第二行开始正式数据。
          </div>
          <el-upload ref="upload" :limit="1" accept=".xlsx,.xls"
                     action=""
                     :on-change="handleChange"
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
            plain
        >查看报告
        </el-button>

        <el-dialog  title="测试报告"  :visible.sync="reportDialog" width="700px" height="500px" append-to-body  @open="openReportDialog()">
          <el-row>
            <el-col :span="18"><div id="pie" style="width: 400px;height: 250px;"></div></el-col>
            <el-col :span="6">
              <div id="testtime"> 运行时间:65ms</div>
              <div id="rate"> 测试成功率: 100%</div></el-col>
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
                  prop="a"
                  label="边a"
                  width="100"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="b"
                  width="100"
                  label="边b"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="c"
                  width="100"
                  label="边c"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="expectedOutput"
                  label="预期输出"
                  align="center"
              ></el-table-column>
              <el-table-column
                  prop="actualOutput"
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
        <el-button
            @click="reset(value)"
            class="reset-button"
            type="warning"
            plain
        >重置</el-button
        >

      </div>
    </div>

    <el-divider content-position="right">测试用例</el-divider>

    <div class="main-table">
      <el-table
          :data="tableData"
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
            prop="a"
            label="边a"
            width="120"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="b"
            width="120"
            label="边b"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="c"
            width="120"
            label="边c"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="expectedOutput"
            label="预期输出"
            align="center"
        ></el-table-column>
        <el-table-column
            prop="actualOutput"
            label="实际输出"
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
import mock_1_json from "@/mock/triangle/triangle_mock_1.json";
import mock_2_json from "@/mock/triangle/triangle_mock_2.json";
import * as echarts from 'echarts';
import {testtriangle} from "../../api/triangletest";
export default {
  name: "SystemTest",
  components: {},
  props: ["parentHeight"],
  data() {
    return {
      options: [
        { value: "1", label: "健壮边界值分析" },
        { value: "2", label: "强健壮等价类测试" },
        { value: "3", label: "导入文件测试" },
      ],
      value: "1",
      tableData: [],
      loading: false,
      classState: [],
      isopened:false,
      reportDialog:false,
      pieData:[],
      error_info:[],
      rate:1.0
    };
  },
  computed: {
    tableHeight(){
      return 420;
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.reset(newVal);
      },
      immediate: false,
    },
  },
  created() {
    this.initTableData(mock_1_json);
  },
  // mounted() {
  //   this.initTableData(mock_1_json);
  // },
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



    handleChange(file){
      this.fileTemp = file.raw;
      if(this.fileTemp){
        console.log("yes")
        this.importfile(this.fileTemp);
      } else {
        this.$message({
          type:'warning',
          message:'请上传附件！'
        })
      }
    },
    //超出最大上传文件数量时的处理方法
    handleExceed(){
      this.$message({
        type:'warning',
        message:'超出最大上传文件数量的限制！'
      })
      return;
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
          obj.a = v.a
          obj.b=v.b
          obj.c=v.c
          obj.expectedOutput=v.expectedOutput

          console.log(obj.id);
          this.tableData = [];
          obj["actualOutput"] = "";
          obj["info"] = "";
          obj["state"] = null;


          arr.push(obj)
          console.log(arr)
        })
        _this.tableData = arr
        console.log(this.tableData)
        this.isopened=false;
      }
    },

    open3() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },

    initTableData(json) {
      this.classState = [];
      this.tableData = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["actualOutput"] = "";
        newData["info"] = "";
        newData["state"] = null;
        this.tableData.push(newData);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      return this.classState[rowIndex];
    },
    doTest() {
      let newData = {};
      if (this.value === "1") {
        newData = {
          triangle_test_list: mock_1_json,
        };
      } else if(this.value==="2"){
        newData = {
          triangle_test_list: mock_2_json,
        };
      } else {
        newData = {
          triangle_test_list: this.tableData,
        };
      }
      const _this = this;
      this.loading = true;
      testtriangle(JSON.stringify(newData.triangle_test_list))
          .then((res) => {
            this.pieData=res.data.pieData
            console.log(this.pieData)
            this.error_info=res.data.error_info
            console.log(this.error_info)
            this.rate=res.data.pieData[0].value/(res.data.pieData[0].value+res.data.pieData[1].value).toFixed(2)
            _this.tableData.forEach((item, index) => {
              let responseObject = res.data.result_list[index];
              //实际运行结果
              item.actualOutput = responseObject.actualOutput;
              //程序运行信息
              item.info = responseObject.info;
              //测试结果 true或false
              item.state =
                  responseObject.testResult === "Pass";
              //测试时间
              item.time = responseObject.testTime;

              _this.classState[index] = item["state"]
                  ? "success-row"
                  : "error-row";
            });
            this.$message({
              message: "测试成功",
              type: "success",
            });
            _this.loading = false;
          })
          .catch((err) => {
            _this.$message.error("Server Error");
            _this.loading = false;
          });
    },
    reset(value) {
      console.log(this.value)
      console.log(this.options)
      console.log(this.loading)
      if (value === "1") {
        this.initTableData(mock_1_json);
      } else if (value === "2") {
        this.initTableData(mock_2_json);
      } else {
        this.initTableData(mock_2_json);
      }
    },
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
