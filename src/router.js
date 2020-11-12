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
          path:'/Contentluku',
          name:'contentluku',
          component:()=>import('./views/Contentluku')
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
