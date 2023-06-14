import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/read/:slug',
            component: () => import('./pages/Read.vue')
        },
        {
            path: '/login',
            component: () => import('./pages/Login.vue')
        },
        {
            path: '/register',
            component: () => import('./pages/Register.vue')
        }
    ],
})

export default router;