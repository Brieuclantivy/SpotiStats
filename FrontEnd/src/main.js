import Vue from 'vue'
import './plugins/vuetify'
//import App from './SpotiStats.vue'
import App from './App.vue'
import axios from 'axios'
import Vuetify, { VLayout } from 'vuetify/lib'
//import Vuetify from 'vuetify/lib'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify, {
  components: {
    VLayout
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
