<template>
    <div>
<!--  <p style="font-size:20px;">一.问题分析</p>-->
<!--  <p>电商平台流程图</p>-->
<!--  <img src="./4.png"/>-->
  <p style="font-size:20px;">1.Funtion level</p>
  <p >可知，该级别对应最一般的边界值测试，以电商平台系统中的结算功能为例，设某一方法getDiscount功能为根据用户的年度消费总额和注册时间（注册到现在经过的年数）返回本次消费的折扣，且后者与前两者具有简单的线性关系。则输入变量为：totalAmount:double， registerTime: int，前者范围应为（0, Max]，其中Max应为单笔支付限额；后者应为[0， Age]，Age为平台上线的年数。以此可对函数进行边界值分析。</p>
      <p style="font-size:20px;">2.Class level</p>
        <p>可知，若getDiscount所属的类与其他类有数据交互，或是类内方法间有交互，则可以在class level进行测试。假设getDiscount新增一输入，为userLevel:int，0代表非会员，1-5代表会员等级。</p>
        <p>该变量需要其他类方法获得，且取值为[0,5]，则可以对其进行边界值的分析。</p>
      <p style="font-size:20px;">3.System level</p>
      <p>设getDiscount新增一输入，为userAge：int，若小于18岁则享受学生折扣，且该参数需要经过公安系统获得。则同理，需要根据公安系统API的说明，获得其边界，并对其进行边界值分析。</p>

      <!--<el-table-->
<!--      :data="questionData"-->
<!--      style="width: 60%;font-size:12px;"-->
<!--      >-->
<!--      <el-table-column-->
<!--        prop="minute"-->
<!--        label=""-->
<!--        width="140"-->
<!--        align="center">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="times"-->
<!--        label="正常情况"-->
<!--        width="240"-->
<!--        align="center">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="level"-->
<!--        label="边界值"-->
<!--        align="center">-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--<p style="margin-top:50px;">举例：</p>-->
<!--<p>账号密码输入次数限制为5：0，1，2，5，6</p>-->
<!--<p style="margin-top:50px;">2.非功能需求</p>-->
<!--<p>性能测试：响应时间，准确度等；</p>-->
<!--<p>压力测试：考虑在如双十一等活动期间</p>-->
<!--<p style="margin-top:50px;">三.Class level</p>-->
<!--<p>考虑类之间，类内方法/函数之间的调用的变量边界等</p>-->
<!--<p style="margin-top:50px;">四.Method level</p>-->
<!--<p>输入/输出变量取值边界，循环次数等</p>-->

    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {questionData:[{
          minute:"搜索商品",
          times:"显示符合条件的商品",
          level:"输入信息无意义，结果为空",

        },{
          minute:"登录",
          times:"登录成功",
          level:"账号/密码有误，重新输入次数限制;自动注销时间限制",
        },{
          minute:"购买商品使用优惠券",
          times:"使用成功",
          level:"优惠券张数限制",
        },{
          minute:"加入购物车",
          times:"加入成功",
          level:"购物车商品数量限制",
        },{
          minute:"添加地址",
          times:"添加成功",
          level:"地址无效",
        },{
          minute:"取消订单",
          times:"取消成功",
          level:"取消时间限制;退款金额限制",
        },
        {
          minute:"物流",
          times:"确认收货",
          level:"自动确认时间限制;商品丢失;商品损坏;超过预计时间;退货/换货",
        },
        {
          minute:"评价",
          times:"评价成功",
          level:"默认好评时间限制",
        },

        ], }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style scoped lang="less">


</style>
