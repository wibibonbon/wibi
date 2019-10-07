import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faStar, faBars } from '@fortawesome/free-solid-svg-icons'
//import { starReg } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faStar, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
