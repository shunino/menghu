import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Personal from '@/pages/personal'
import News from '@/pages/news'
import Datas from '@/pages/datas'
import Show from '@/pages/show'
import Garden from '@/pages/garden'
import Popular from '@/pages/popular'
import Intro from '@/pages/intro'

import NewsDetail from '@/pages/newsDetail'
import PopularDetail from '@/pages/popularDetail'
import DatasDetail from '@/pages/datasDetail'
import DatasDetail1 from '@/pages/datasDetail1'
import GardenDetail from '@/pages/gardenDetail'
import ShowDetail from '@/pages/showDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/datas',
      name: 'datas',
      component: Datas
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/garden',
      name: 'garden',
      component: Garden
    },
    {
      path: '/popularDetail',
      name: 'PopularDetail',
      component: PopularDetail
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/DatasDetail',
      name: 'DatasDetail',
      component: DatasDetail
    },
    {
      path: '/DatasDetail1',
      name: 'DatasDetail1',
      component: DatasDetail1
    },
    {
      path: '/gardenDetail',
      name: 'gardenDetail',
      component: GardenDetail
    },
    {
      path: '/showDetail',
      name: 'showDetail',
      component: ShowDetail
    }
  ]
})

router.beforeEach((to,from,next)=>{
  Vue.prototype.$token =  Vue.prototype.$getCookie('token');
  Vue.prototype.$userId = Vue.prototype.$getCookie('userid');
  console.log(Vue.prototype.$token,Vue.prototype.$userId);
  next();
})
export default router;
