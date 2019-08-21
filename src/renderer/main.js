import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'
 
Vue.use(VModal, { componentName: "Modal" })

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

library.add(faChartLine, faCalendarAlt, faChevronLeft, faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
