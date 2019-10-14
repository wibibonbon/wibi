import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoffee,
    faStar,
    faBars,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
    faGlobeAsia,
    faLaptopCode,
    faHome,
} from '@fortawesome/free-solid-svg-icons'
//import { starReg } from '@fortawesome/free-regular-svg-icons'
import {
    faTelegramPlane,
    faLinkedinIn,
    faXing,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faCoffee,
    faStar,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
    faBars,
    faTelegramPlane,
    faLinkedinIn,
    faXing,
    faGlobeAsia,
    faLaptopCode,
    faHome
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
