import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'
import XLSX from 'xlsx'
import echarts from "echarts";


//加载Element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.less'


Vue.use(ElementUI);
Vue.use(XLSX)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')