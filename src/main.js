import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/tailwind.scss'
Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});