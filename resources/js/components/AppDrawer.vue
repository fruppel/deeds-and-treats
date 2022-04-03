<template>
    <div :class="maskClass" @click="close" class="fixed h-screen left-0 top-0 filter bg-white/30 backdrop-blur-sm"></div>
    <div
        :class="drawerClass"
        class="fixed h-screen bg-gray-300 left-0 top-0 shadow-xl transition-width transition-slowest ease overflow-hidden"
    >
        <component :is="this.drawerStore.component" v-bind="this.drawerStore.componentProps"></component>
    </div>
</template>

<script setup>
import useDrawerStore from '@/stores/drawer';
import {computed} from 'vue';

const drawerStore = useDrawerStore();

const drawerClass = computed(() => {
    return drawerStore.drawerOpen === true
        ? ['w-80']
        : ['w-0']
});

const maskClass = computed(() => {
    return drawerStore.drawerOpen === true
        ? ['w-full']
        : ['w-0']
});

const close = () =>  drawerStore.close();
</script>
