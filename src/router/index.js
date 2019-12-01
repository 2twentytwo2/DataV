import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test.vue'
import test1 from  '@/views/testtt.vue'
import chart from '@/components/chart5'
import w from '@/components/wordCloud'
import map from '@/components/testmap.vue'
import test2 from '@/views/test2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'test',
      component:test,
    }

  ]
})
