import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Game',
        component: () => import('../views/Game.vue'),
    },
    {
        path: '/result',
        name: 'Result',
        component: () => import('../views/Result.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
