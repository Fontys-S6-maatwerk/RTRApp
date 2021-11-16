import Vue from "vue";
import Vuetify from "vuetify";
Vue.config.productionTip = false;
Vue.use(Vuetify);

process.env = Object.assign(process.env, {
    VUE_APP_BASE_URL: 'http://localhost:3005',
});