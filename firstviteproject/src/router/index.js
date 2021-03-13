import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser.vue'
import Users from '../views/Users.vue'
import UpdateUser from '../views/UpdateUser.vue'
// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/updateuser/:userId',
    name: 'UpdateUser',
    component: UpdateUser
  }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router