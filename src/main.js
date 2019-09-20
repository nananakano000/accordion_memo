// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* import Firebase */
import firebase from 'firebase'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCsP2lFUkGM3UDuw_U56imrLKgt8ZVFq8A",
  authDomain: "notebook-f140a.firebaseapp.com",
  databaseURL: "https://notebook-f140a.firebaseio.com",
  projectId: "notebook-f140a",
  storageBucket: "",
  messagingSenderId: "626881621903",
  appId: "1:626881621903:web:ee59d20150b514805365fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
