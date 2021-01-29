import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import exampleStore from '../../app/Modules/Example/Vue/js/store'
export default new Vuex.Store({
    modules : {
        exampleStore
    },
    state : {
        name: 'My name is sadek '
    }
})
