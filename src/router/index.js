import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import PostsEdit from '../views/PostsEdit.vue';
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from '../views/PostsIndex.vue';
import PostsShow from '../views/PostsShow.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/posts/:id/edit',
    name: 'edit',
    component: PostsEdit

  },
  {
    path: '/signup',
    name: "Signup",
    component: Signup
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/posts',
    name: "PostsIndex",
    component: PostsIndex
  },
  {
    path: '/show',
    name: "PostsShow",
    component: PostsShow
  },
  {
    path: '/logout',
    name: "Logout",
    component: Logout
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
