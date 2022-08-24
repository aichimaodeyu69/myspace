import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import UserList from '../views/UserList'
import UserProfile from '../views/UserProfile'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login/',
    name: 'login',
    component: Login
  },
  {
    path: '/register/',
    name: 'register',
    component: Register
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/404/',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
