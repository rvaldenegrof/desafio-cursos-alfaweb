import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import { auth } from 'firebase'

import './plugins/simple-rules'

Vue.config.productionTip = false

store.dispatch('system/initializeFirebase')

/* auth.onAuthStateChanged(user => {
  if(user){
      console.log(user)
      store.dispatch("userConecction", {
          uid: user.uid,
          email: user.email
      })
  } else {
      console.log(user);
      store.dispatch("userConecction", user)
  }
}) */

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
