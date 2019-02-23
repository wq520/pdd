import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat/chat'
import Home from '@/pages/Home/home'
import Me from '@/pages/Me/me'
import Recommend from '@/pages/Recommend/recommend'
import Search from '@/pages/Search/search'

import Hot from '../pages/Home/Children/Hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        // 热门版块
        {path: 'hot', component: Hot},
        // 服饰版块
        {path: 'dress', component: Dress},
        // 鞋包版块
        {path: 'box', component: Box},
        // 母婴版块
        {path: 'mbaby', component: Mbaby},
        // 百货版块
        {path: 'general', component: General},
        // 食品版块
        {path: 'food', component: Food},
        // 内衣版块
        {path: 'shirt', component: Shirt},
        // 男装版块
        {path: 'man', component: Man},
        // 电器版块
        {path: 'ele', component: Ele},
        {path: '/home', redirect: '/home/hot'}
      ]
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
