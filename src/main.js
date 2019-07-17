import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './router/router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
//import '../static/fonts/iconfont.css'

//开启debug模式
Vue.config.debug = true;
Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
  routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++;
    }
  }
})    
store.commit('increment');
//console.log(store.state.count) // -> 1

const app = new Vue({
//el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')