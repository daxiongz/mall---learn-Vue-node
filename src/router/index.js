import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import MyHeader from '@/components/myHeader'
// 引入组件
import Test from '@/view/test'  
import Title1 from '@/view/title1'
import Title2 from '@/view/title2'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
	// routes: [
	// 	{
	// 		path: '/',
	// 		name: 'MyHeader',
	// 		component: MyHeader
	// 	}
	// ]
  /*routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // 路由参数填写
    {
      path: '/test',
      name: 'test',
      component: Test,
      children: [
      	{
      		path: 'title1',
      		name: 'title1',
      		component: Title1
      	},
      	{
      		path: 'title2',
      		name: 'title2',
      		component: Title2
      	}
      ]
    },
    {
    	path: '/goods',
    	name: 'goods',
    	component: Goods
    }
  ]*/

  // 命名视图
  routes: [
  	{
  		// '/' 根路由所在的页面是 app.vue
  		path: '/',
  		name: '/',
  		components: {
  			default: Goods,
  			title1: Title1,
  			title2: Title2
  		}
  	}
  ]
})
