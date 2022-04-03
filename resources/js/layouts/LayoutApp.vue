<template>
    <div class="bg-gray-100 min-h-screen">
        <nav class="bg-white border-b border-gray-100">
            <div class="flex justify-between px-4 h-16">
                <!-- TODO: Logo -->
                <div class="flex items-center font-semibold">
                    Deeds & Treats
                </div>

                <mobile-menu :routes="{}"></mobile-menu>

                <app-drawer></app-drawer>
            </div>
        </nav>

        <div>
            <suspense>
                <router-view></router-view>
            </suspense>
        </div>
    </div>
</template>

<script>
import MobileMenu from '../components/layout/MobileMenu';
import AppDrawer from '../components/AppDrawer';
import { RouterView } from 'vue-router';

export default {
    components: {
        AppDrawer,
        MobileMenu,
        RouterView
    }
}
</script>
