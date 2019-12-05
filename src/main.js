import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/tailwind.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUserSecret)

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});