import Vue from 'vue'
import Router from 'vue-router'
import Decorators from "../components/decorators.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component:Decorators
            // component:() => import('@/components/decorators.vue')
        }]
})
