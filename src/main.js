import Vue from 'vue';
import numeral from 'numeral';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('price', value => numeral(value).format('0.00'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
