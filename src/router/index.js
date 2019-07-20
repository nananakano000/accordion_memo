import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MemoListItem from '@/components/MemoListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'MemoListItem',
      component: MemoListItem
    },
    {
      path: '/',
      name: 'MemoListItem',
      component: MemoListItem
    }
  ]
})
