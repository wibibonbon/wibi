import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoffee,
    faBars,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
    faGlobeAsia,
    faLaptopCode,
    faHome,
    faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import {
    faTelegramPlane,
    faLinkedinIn,
    faXing,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faCoffee,
    fasStar,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
    faBars,
    faTelegramPlane,
    faLinkedinIn,
    faXing,
    faGlobeAsia,
    faLaptopCode,
    faHome,
    farStar
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
