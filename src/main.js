import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import i18n from "./plugins/i18n";
import store from "./store";
import './registerServiceWorker'

Vue.config.productionTip = false;


new Vue({
    vuetify,
    i18n,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");