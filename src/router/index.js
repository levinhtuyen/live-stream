import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'color',
        beforeEnter: (to, from, next) => {
            localStorage.getItem('access_token') ? next('/live') : next('/live')
        }
    
    }
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
