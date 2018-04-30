import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '@/components/ProductList';
import ProductPage from '@/components/ProductPage';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: ProductList,
    },
    {
      path: '/products/:slug',
      name: 'Product',
      component: ProductPage,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
