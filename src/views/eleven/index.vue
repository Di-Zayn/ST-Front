<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <span style="font-size:24px;"><b>&nbsp;第14题</b></span>
          <div style="font-size:16px;">

            <p >某实时的Web系统，服务器端应用程序需要接受客户端发送的不同类型的数据包，为了使系统设计达到最优，使用统一接口，接口（通用包）描述为：</p>
            <p> 接口包的类型：正常交易包、查询包、退货包、换货包、部分退货包、部分换货包；</p>
            <p>涉及的商品种类：1、2、3、4、5、6；</p>
            <p>支付类型：系统账户余额支付、货到付款、工行账户支付、农行账户支付、建行账户支付、交行账户支付、邮储账户支付、礼品卡支付；</p>
            <p>发票类型：日用品、电脑配件、鞋、帽、家电、服装、电脑、ipad、手机、化妆品、食品、其他；</p>
            <p>支付金额：货到付款无限制、银行支付不能超出最大限额2万、系统账户余额支付不能超出余额；</p>
            <p>订单状态：正在处理、正在送货、处理完成、订单取消。</p>
            <p>用正交实验法设计用例。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用例设计" name="2">
          <SalesQuestion />
        </el-tab-pane>


      </el-tabs>
    </el-card>







  </div>
</template>

<script>

import SalesQuestion from "./question";
export default {
  name: "two",
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
