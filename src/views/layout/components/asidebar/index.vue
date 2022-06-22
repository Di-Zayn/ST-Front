<template>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#38626c"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :default-openeds="openeds"
      router
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>代码练习</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cash">电信收费问题</el-menu-item>
          <el-menu-item index="/calendar">万年历问题</el-menu-item>
          <el-menu-item index="/triangle">判断三角形</el-menu-item>
          <el-menu-item index="/sales">电脑销售系统</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>讨论问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/two">第3题：销售管理系统</el-menu-item>
          <el-menu-item index="/four">第5题：讨论</el-menu-item>
          <el-menu-item index="/seven">第8题：实时系统</el-menu-item>
          <el-menu-item index="/ten">第13题：ERP系统</el-menu-item>
          <el-menu-item index="/eleven">第14题：实时Web系统</el-menu-item>
          <el-menu-item index="/nine">第15题：ATM机</el-menu-item>
          <el-menu-item index="/twelve">第16题：构建程序图</el-menu-item>
          <el-menu-item index="/thirteen">第17题：销售系统</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目测试</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/unittest">单元测试</el-menu-item>
          <el-menu-item index="/class">集成测试</el-menu-item>
          <el-menu-item index="/system">系统测试</el-menu-item>

        </el-menu-item-group>
      </el-submenu>


      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
</template>

<script>

export default {
  name: "AsideBar",
  components: {},
  props: ['is-collapse'],
  data() {
    return {
      openeds: ['1'],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style scoped lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
