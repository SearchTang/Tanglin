import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path:'/',
      name:'login',
      component:()=>import('./views/Login')
    },
    {
      path:'/Main',
      component:()=>import('./views/Main'),
      children:[
        {
          path:'/Contentshuju',
          name:'contentshuju',
          component:()=>import('./views/Contentshuju')
        },
        {
          path:'/Xingzheng',
          name:'xingzheng',
          component:()=>import('./views/Xingzheng')
        },
        {
          path:'/Xingzhengchuku',
          name:'xingzhengchuku',
          component:()=>import('./views/Xingzhengchuku')
        },
        {
          path:'/Xingzhengpandian',
          name:'xingzhengpandian',
          component:()=>import('./views/Xingzhengpandian')
        },
        {
          path:'/Bianyi',
          name:'bianyi',
          component:()=>import('./views/Bianyi')
        },
        {
          path:'/Bianyichuku',
          name:'bianyichuku',
          component:()=>import('./views/Bianyichuku')
        },
        {
          path:'/Bianyipandian',
          name:'bianyipandian',
          component:()=>import('./views/Bianyipandian')
        },
        {
          path:'/Contentluku',
          name:'contentluku',
          component:()=>import('./views/Contentluku')
        },
        {
          path:'/Chukuguanli',
          name:'chukuguanli',
          component:()=>import('./views/Chukuguanli')
        },
        {
          path:'/Pandian',
          name:'pandian',
          component:()=>import('./views/Pandian')
        },
        {
          path:'/Kuchuenyujin',
          name:'kuchuenyujin',
          component:()=>import('./views/Kuchuenyujin')
        },
        {
          path:'/Kuchuanqindan',
          name:'kuchuanqindan',
          component:()=>import('./views/Kuchuanqindan')
        },
        {
          path:'/Changkuzhandan',
          name:'changkuzhandan',
          component:()=>import('./views/Changkuzhandan')
        },
        {
          path:'/Caiwujizhan',
          name:'caiwujizhan',
          component:()=>import('./views/Caiwujizhan')
        },
        {
          path:'/Yikuguanli',
          name:'yikuguanli',
          component:()=>import('./views/Yikuguanli')
        },
       
       
        {
          path:'/Main',
          redirect:'/Contentshuju'
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
   
  ]
})
