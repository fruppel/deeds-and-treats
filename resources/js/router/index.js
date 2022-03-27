import Page404 from '../pages/Page404';
import PageDashboard from '../pages/PageDashboard';
import PageDeeds from '../pages/PageDeeds';
import PageLogin from '../pages/PageLogin';
import PageRegister from '../pages/PageRegister';
import {createRouter, createWebHistory} from 'vue-router';
import store from '../store';
import LayoutApp from '../layouts/LayoutApp';
import LayoutGuest from '../layouts/LayoutGuest';

const routes = [
    {
        path: '/',
        component: PageLogin,
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/login',
        component: PageLogin,
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/register',
        component: PageRegister,
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/spa',
        component: PageDashboard,
        meta: {
            layout: 'LayoutApp',
            requiresAuth: false
        }
    },
    {
        path: '/deeds',
        component: PageDeeds,
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true
        },
    },
    // Catch all
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Page404,
        meta: {
            layout: 'LayoutGuest',
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (
        to.meta.requiresAuth && store.getters.isAuthenticated === false
    ) {
        // return false;
        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
});

export default router;
