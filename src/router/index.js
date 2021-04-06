import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Member from '../views/Member.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
