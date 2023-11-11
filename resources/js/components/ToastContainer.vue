<template>
    <transition>
        <div v-if="toastStore.message !== null" class="fixed bottom-5 w-full flex justify-center">
            <div class="bg-gray-900/75 text-gray-100 py-3 px-6 rounded-full">
                {{ toastStore.message }}
            </div>
        </div>
    </transition>
</template>

<script setup>
import useToastStore from '@/stores/toast.js';

const toastStore = useToastStore();
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
