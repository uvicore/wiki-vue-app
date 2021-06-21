import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue';

//import { auth } from '@/auth';
//import { auth } from '@/uvicore/auth/adapters/oidc';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      //authName: auth.authName,
      authName: 'wiki',
    }

  },

  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },

  {
    path: '/logout',
    name: 'logout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Logout.vue'),
  },

  // FIXME still need '/:space/:section/:topic',
  // maybe goto landing page, or eventually display some topics "desc?"
  {
    path: '/:space/:section/:topic',
    name: 'Section',
    component: Home,
  },

  {
    path: '/:space/:section/:topic/:post',
    name: 'Post',
    component: Post,
  }
]

export const Router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
})

//auth.useRouter(Router);


