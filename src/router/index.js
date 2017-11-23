import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import ActivityIndex from '@/components/activity/ActivityIndex'
import ActivityAdd from '@/components/activity/ActivityAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'ai',
          name: 'ActivityIndex',
          component: ActivityIndex
        },
        {
          path: 'activity/add',
          name: 'ActivityAdd',
          component: ActivityAdd
        }
      ]
    }
  ]
})
