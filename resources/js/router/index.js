import {createRouter, createWebHistory} from 'vue-router';
import useAuthStore from '@/stores/auth';

const routes = [
    {
        path: '/',
        redirect: to => {
            return { path: '/dashboard' };
        },
    },
    {
        path: '/login',
        component: () => import('@/pages/PageLogin'),
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/PageRegister'),
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/dashboard',
        component: () => import('@/pages/PageDashboard'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true
        }
    },
    {
        path: '/treats',
        component: () => import('@/pages/PageTreats'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true
        },
    },
    {
        path: '/deeds',
        component: () => import('@/pages/PageDeeds'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true
        },
    },
    // Catch all
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/Page404'),
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
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && authStore.isAuthenticated === false) {
        console.log('Redirect to login');
        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
});

export default router;
