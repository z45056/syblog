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
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail/index.vue'),
        children: []
    },
    {
        path: '/creation',
        name: 'creation',
        component: () => import('../views/creation/index.vue'),
        children: []
    }
]
const router = new Router({
    mode: 'history',
    routes: routes
})

export default router