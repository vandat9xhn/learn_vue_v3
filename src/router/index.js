import { createRouter, createWebHistory } from 'vue-router';
// 
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
