import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@/components/Datav'
import '@/assets/css/common.less'
import VueEcharts from '@/utils/use_vueEcharts'
import * as echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $axios from '@/http/interface.js'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = $axios
Vue.use(dataV)
Vue.use(VueEcharts)
Vue.use(ElementUI)
Vue.config.productionTip = false

// 全局注册
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
