import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue';
//import auth from '@/services/auth';


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
    // meta: {
    //   //authName: auth.authName,
    //   authName: 'wiki',
    // }

  },
  {
    path: '/:sectionName/:spaceName',
    name: 'Post',
    component: Post,
  }
]

export const Router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//auth.useRouter(router);


