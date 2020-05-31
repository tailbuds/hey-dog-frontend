import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import update from '../views/update.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/update/:breedId',
    query: { edit: 'true' },
    name: '/update/:breedId',
    component: update,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
