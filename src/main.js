import Vue from 'vue'
import App from "./App.vue"
import VueBootstrap from "bootstrap-vue"
import Resource from "vue-resource"

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

Vue.use(VueBootstrap);
Vue.use(Resource);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
    router,

    data: {
        url: 'http://lab.kids-lu-server.xyz/api/v1/',
        config: {
            headers: {
                Authorization: "Basic " + btoa("test" + ":" + "test")
            }
        },
    }
});
