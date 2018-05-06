import Vue from 'vue'
import App from "./App.vue"
import VueBootstrap from "bootstrap-vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

Vue.use(VueBootstrap);
// Vue.config.productionTip = false;

new Vue({
  el: '#app',
    components: { App },
    template: '<App/>',
    data:{}
});
