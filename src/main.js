import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { auth } from './plugins/firebase'

// Loaders
import '@/plugins/globalDirectives'
import '@/plugins/globalMixins'
import '@/plugins/globalComponents'
import '@/plugins/gcloud'


Vue.config.productionTip = false

let app = false

auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
