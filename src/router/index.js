import Vue from 'vue'
import Router from 'vue-router'
import test from '@/views/test.vue'
import test1 from  '@/views/testtt.vue'
import testbar from  '@/views/testbar.vue'
import chart from '@/components/chart5'
import w from '@/components/wordCloud'
import map from '@/components/testmap.vue'
import test2 from '@/views/test2.vue'
import test3 from '@/views/test3.vue'
import test4 from '@/views/test4.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/gailan',
      name:'test',
      component:test,
    },
    {
      path:'/zhiyuan',
      name:'test',
      component:test1,
    },{
      path:'/keyan',
      name:'test',
      component:test2,
    }


  ]
})
