import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppAbout from '../pages/AppAbout.vue'
import AppProject from '../pages/AppProject.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/about', component: AppAbout, name: 'about' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})