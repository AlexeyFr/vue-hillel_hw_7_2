import Vue from 'vue'
import Router from 'vue-router'
import Faq from './components/Faq.vue'
import Positions from './components/Positions.vue'
import Position from './components/Position.vue'
import Faforites from './components/Faforites.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Positions
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/positions',
      name: 'positions',
      component: Positions
    },
    {
      path: '/position/:id',
      name: 'position',
      component: Position
    },
    {
      path: '/faforites',
      name: 'faforites',
      component: Faforites
    }
  ]
})