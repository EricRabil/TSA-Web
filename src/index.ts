import Vue from 'vue';

import App from './App.vue';
import router from './router';

declare global {
    interface Window {
        router: any;
        vue: any;
    }
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
