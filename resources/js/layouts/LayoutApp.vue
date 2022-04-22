<template>
    <div class="bg-gray-100 min-h-screen">
        <nav class="relative bg-white border-b border-gray-100 z-10">
            <div class="flex justify-between px-4 h-16">
                <div class="flex items-center font-semibold text-xl">
                    <router-link to="/dashboard">Deeds & Treats</router-link>
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

<script setup>
import MobileMenu from '../components/layout/MobileMenu';
import AppDrawer from '../components/AppDrawer';
import { RouterView } from 'vue-router';
</script>
