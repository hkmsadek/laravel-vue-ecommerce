require('./bootstrap');
window.Vue = require('vue');
Vue.component('mainapp', require('./mainapp.vue').default);
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
const app = new Vue({
    el: '#app',
    router,
    store

});

