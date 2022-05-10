import Vue from "vue";
import Router  from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/register.vue')
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
        path: '/article',
        name: 'article',
        component: () => import('../views/article/index.vue'),
        children: []
    },
    {
        path: '/tools',
        name: 'tools',
        component: () => import('../views/tools/index.vue'),
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
    mode: 'hash',
    routes: routes
})

export default router