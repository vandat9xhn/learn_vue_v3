import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('../pages/home/HomePage');
const AboutPage = () => import('../pages/about/AboutPage');

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
