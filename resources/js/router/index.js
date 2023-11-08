import {createRouter, createWebHistory} from 'vue-router';
import useAuthStore from '@/stores/auth';

const routes = [
    {
        path: '/',
        redirect: () => {
            return { path: '/dashboard' };
        },
    },
    {
        path: '/login',
        component: () => import('@/pages/PageLogin.vue'),
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/PageRegister.vue'),
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/forgot-password',
        component: () => import('@/pages/PageResetPassword.vue'),
        meta: {
            layout: 'LayoutGuest',
            requiresAuth: false,
        }
    },
    {
        path: '/dashboard',
        component: () => import('@/pages/PageDashboard.vue'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true,
            title: 'Dashboard',
        }
    },
    {
        path: '/treats',
        component: () => import('@/pages/PageTreats.vue'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true,
            title: 'Treats',
        },
    },
    {
        path: '/deeds',
        component: () => import('@/pages/PageDeeds.vue'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true,
            title: 'Deeds',
        },
    },
    {
        path: '/statistics',
        component: () => import('@/pages/PageStatistics.vue'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true,
            title: 'Statistiken',
        },
    },
    {
        path: '/settings',
        component: () => import('@/pages/PageSettings.vue'),
        meta: {
            layout: 'LayoutApp',
            requiresAuth: true,
            title: 'Einstellungen',
        },
    },
    // Catch all
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/Page404.vue'),
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
