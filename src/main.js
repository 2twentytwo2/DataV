import Vue from 'vue'
import App from './main.vue'
import echarts from 'echarts'
import animated from 'animate.css'
import VueRouter from "vue-router";
import router from './router/router'
// import $ from 'jquery'
Vue.use(animated)
Vue.use(VueRouter)
Vue.use(echarts)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
