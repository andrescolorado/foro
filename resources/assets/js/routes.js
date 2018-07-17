import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export const routes = [
    { path: '/', component: Login},
    { path: '/login', component: Login},
    { path: '/register', component: Register }
];