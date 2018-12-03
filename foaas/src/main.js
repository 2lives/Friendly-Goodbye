import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/store.js'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
