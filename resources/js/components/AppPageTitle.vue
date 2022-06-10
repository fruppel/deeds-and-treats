<template>
    <header class="py-2 mb-5 border-b border-b-white dark:border-b-black px-4 bg-white dark:bg-gray-800 text-black dark:text-gray-300 shadow">
        <h1 class="font-semibold text-sm uppercase">
            {{ title }}
        </h1>
    </header>
</template>

<script setup>
import router from '@/router';
import {computed} from 'vue';

const title = computed(() => router.currentRoute.value.meta?.title || 'asd');
console.log(router.currentRoute.value.meta?.title);
</script>
