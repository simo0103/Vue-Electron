import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Home').default
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: require('@/components/Calendar/Calendar').default
    },
    {
      path: '/resoconto',
      name: 'resoconto',
      component: require('@/components/Expenses/Resoconto').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
