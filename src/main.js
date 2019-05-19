import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueSignaturePad from 'vue-signature-pad'

Vue.config.productionTip = false;
Vue.use(VueSignaturePad);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
