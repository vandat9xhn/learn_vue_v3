import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('../pages/home/HomePage');
const AboutPage = () => import('../pages/about/AboutPage');
const PostPage = () => import('../pages/post/PostPage');
//
const UserPage = () => import('../pages/user/_main/UserPage');
const UserHomePage = () => import('../pages/user/home/UserHomePage');
const UserPostPage = () => import('../pages/user/post/UserPostPage');
const UserProfilePage = () => import('../pages/user/profile/UserProfilePage');

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    {
        path: '/user',
        component: UserPage,
        meta: {
            auth: true,
        },
        children: [
            { path: '', component: UserHomePage },
            { path: 'post', component: UserPostPage },
            { path: 'profile', component: UserProfilePage },
        ],
    },
    { path: '/post/:id', component: PostPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
