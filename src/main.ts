import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import fontawesome from '@fortawesome/fontawesome';
import fas from '@fortawesome/fontawesome-free-solid';
import fab from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(fas, fab);
Vue.use(Buefy);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
