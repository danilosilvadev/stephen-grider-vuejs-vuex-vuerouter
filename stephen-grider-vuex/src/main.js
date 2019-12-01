import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler'
import AnotherPage from './components/AnotherPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/oauth2/callback',
      component: AuthHandler
    },
    {
      path: '/another_page',
      component: AnotherPage
    }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')