import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueTypedJs from 'vue-typed-js'
import VueRouter from 'vue-router'
import router from './router'
import VuePapaParse from 'vue-papa-parse'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.use(VueTypedJs)
Vue.use(VueRouter)
Vue.use(VuePapaParse)
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  router, // we tell our vue instance to use this vue router
  render: h => h(App)
}).$mount('#app')