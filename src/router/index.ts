import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HeroList from '@/views/HeroList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HeroList',
    component: HeroList,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/superhero',
    name: 'SuperheroView',
    component: () => import(/* webpackChunkName: "SuperheroView" */ '../views/SuperheroView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
