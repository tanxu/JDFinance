import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Money from '@/pages/money/index'
import Ious from '@/pages/ious/index'
import Raise from '@/pages/raise/index'
import Download from '@/pages/special/download'
import '@/assets/css/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/money',
      name: 'Money',
      component: Money
    },
    {
      path: '/ious',
      name: 'Ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'Raise',
      component: Raise
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
