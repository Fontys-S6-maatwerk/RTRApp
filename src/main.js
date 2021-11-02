import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import moment from 'moment'

Vue.config.productionTip = false


Vue.filter('formatDate', function(value, format) {
        if (value) {
            return moment(String(value)).format(format)
        }
    },
)

new Vue({
    vuetify,
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')