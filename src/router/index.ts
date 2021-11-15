import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/superhero',
    name: 'SuperheroView',
    component: () => import(/* webpackChunkName: "SuperheroView" */ '../views/SuperheroView.vue'),
  },
  {
    path: '/superhero/details/:id?',
    name: 'HeroDetails',
    component: () => import(/* webpackChunkName: "HeroDetails" */ '../views/HeroDetails.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
