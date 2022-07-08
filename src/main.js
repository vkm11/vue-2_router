import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import About from './components/About'
import Home from './components/Home'

Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    component: Home,
  },
  {
    path:'/about',
    component: About
  }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router, // router register
  render: h => h(App),
}).$mount('#app')
