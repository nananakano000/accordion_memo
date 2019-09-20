import Vue from 'vue'
import Router from 'vue-router'

import TopPage from '@/atomic/Page/TopPage'
import SelectNotePage from '@/atomic/Page/SelectNotePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/SelectNotePage/:docId',
      name: 'SelectNotePage',
      component: SelectNotePage,
      props: true
    }
  ]
})
