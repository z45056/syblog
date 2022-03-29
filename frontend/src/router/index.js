import Vue from "vue";
import Router  from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        children: []
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue'),
        children: []
    },
]
const router = new Router({
    mode: 'history',
    routes: routes
})

export default router