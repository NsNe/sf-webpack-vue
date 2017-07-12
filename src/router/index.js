import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Haha from '@/components/Haha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/1',
      name: 'Haha',
      component: Haha
    }
  ]
})
