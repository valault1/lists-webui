import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import custom theming
// REPLACED by a line in vue.config.js
//import './app.scss'



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Handles sessions
import VueSession from 'vue-session'
var options = {
  persist: true
}

Vue.use(VueSession, options)


new Vue({
  router,
  render: h => h(App)
  //render (h) { return h((this as any).ViewComponent) } // this should get rid of "propert session does not exist on type..."
}).$mount('#app')
