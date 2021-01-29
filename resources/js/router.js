import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import exampleMainPage from './exampleMainPage';
import ExampleRoutes from '../../app/Modules/Example/Vue/js/router'

const initialRoutes = [
    {path: '/example-main-page', name: 'test', component: exampleMainPage}
]

// bring in all the modules routes
// console.log(AccountsRoutes)
var routes = []
routes = routes.concat(
    initialRoutes,
    ExampleRoutes

)



export default new Router({
    mode: 'history',
    routes
})
