import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false
//agora de forma global vc pode usar esse componente Contador
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
