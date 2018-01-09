import '@/config/firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import store from '@/config/vuex/store'
import i18nConfig from '@/config/i18n'
// MUST STAY HERE EVEN IF UNUSED
// this loads the globalComponents
import globalComponents from '@/config/globalComponents'
import filters from '@/filters'

Vue.use(VueFire)
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  i18n: i18nConfig,
  template: '<App/>',
  components: { App },
  filters
})
