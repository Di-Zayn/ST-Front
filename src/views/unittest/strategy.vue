<template>
    <div>
        <span style="font-size:24px;"><b>&nbsp;测试策略</b></span>
      <div style="font-size:16px;">
        
      <p><b>静态测试</b></p>
      <p>以Java类为测试单元，使用代码审查工具PMD，检查每个测试单元的命名规范，包引入规范，可靠性，可维护性。</p>
      <p>选取三个类作为测试对象，依次是IndividualUserController类，OrganizationController类，ActivityServiceImpl类。</p>
      <p>测试内容包括包引入规范，变量命名规范，未使用代码，无用初值赋值，复杂表达式，重复代码，循环体创建新对象。</p>
      <p><b>动态测试</b></p>
      <p>以Java类为测试单元，采取孤立测试的策略，为每个测试单元单独设计桩模块和驱动模块，来测试类中方法。对于每一被测类，选择类中非空代码行（LOC）>20者或复杂度(VG)>3者进行测试，其余不进行测试。</p>
      <p>选取三个类作为测试对象，依次是IndividualUserController类，OrganizationController类，ActivityServiceImpl类。</p>
      <p><b>测试方法</b></p>
      <p>根据类规约和操作规约设计用例，合理利用等价类划分法、判定表法等黑盒测试方法和路径覆盖、语句覆盖等白盒测试方法。</p>
      <p>对具有特殊需求的类辅以下面两种方法设计测试用例：</p>
      <p>(1)根据状态转换图构建测试用例。 该方法根据被测试的类的对象所处的状态以及状态之间的转移来构造测试用例，对状态之间和状态内部的每一转换及其可能发生的异常转换、转换的监护条件等进行全面测试。</p>
      <p>(2)基于实现构建测试用例。 该方法利用传统逻辑覆盖法、数据流分析法等白盒测试技术对程序的逻辑结构或数据流进行测试，以达到一定的代码覆盖率。</p>


      
      <!-- <img src="./12.jpg"/> -->
  
  
</div>






    </div>



</template>

<script>

export default {
  name: "Strategy",
  components: {},
  props: {},
  data() {
    return { }
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