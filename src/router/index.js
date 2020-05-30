import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/update',
    name: 'update',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/update.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
