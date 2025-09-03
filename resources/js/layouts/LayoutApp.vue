<template>
    <div class="bg-gray-100 dark:bg-gray-900 min-h-screen" :data-theme="theme">
        <nav class="sticky top-0 text-black dark:text-gray-200 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-900 z-10 mb-2">
            <div class="flex justify-between px-4 h-12">
                <div class="flex items-center font-semibold text-lg">
                    {{ title }}
                </div>
                <mobile-menu :routes="{}"></mobile-menu>
                <app-drawer></app-drawer>
            </div>
        </nav>

        <div>
            <router-view></router-view>
        </div>
    </div>
    <toast-container></toast-container>
</template>

<script setup>
import {computed, ref} from 'vue';
import { RouterView } from 'vue-router';
import router from '@/router';
import MobileMenu from '../components/layout/MobileMenu.vue';
import AppDrawer from '../components/AppDrawer.vue';
import ToastContainer from '@/components/ToastContainer.vue';
import useUserStore from '@/stores/user.js';

const title = computed(() => router.currentRoute.value.meta?.title || 'Deeds & Treats');
let theme = ref('light');

const userStore = useUserStore();
userStore.fetch().then(() => {
    theme.value = userStore.settings.theme;
});
</script>
