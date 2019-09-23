import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.scss'
//import * as THREE from './js/three.min.js'
//import './js/vanta.topology.min.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
