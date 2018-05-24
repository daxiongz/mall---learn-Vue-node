import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入组件
import Test from '@/view/test'  

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // 路由参数填写
    {
      path: '/test/:testId/name/:testName',
      name: 'HelloWorld',
      component: Test
    }
  ]
})
