import Vue from 'vue';
import Router from 'vue-router';
import { VueConstructor } from 'vue/types/vue';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import Safety from '../components/Safety.vue';
import UseCase from '../components/UseCase.vue';
import Usages from '../UseCases';

Vue.use(Router);

interface Route {
  path: string;
  component: VueConstructor;
  props: boolean | any;
}

const computedRoutes: Route[] = [];
Usages.forEach((usage) => {
  computedRoutes.push({
    path: `/${usage.identifier}`,
    component: UseCase,
    props: (route: any) => ({usage}),
  });
});

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      props: true,
    },
    {
      path: '/products',
      component: Products,
      props: true,
    },
    {
      path: '/safety',
      component: Safety,
    }
  ].concat(computedRoutes),
});
