require('./bootstrap');
window.Vue = require('vue');
Vue.component('mainapp', require('./mainapp.vue').default);
import router from './router'
import store from './store'
const app = new Vue({
    el: '#app',
    router,
    store

});

