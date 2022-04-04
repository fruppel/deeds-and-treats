<template>
    <a @click="toggleVisibility">{{ label }}</a>
    <div
        v-if="contentVisible"
        class="bg-gray-50"
    >
        <slot />
    </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true,
    }
});

const contentVisible = ref(false);

const toggleVisibility = () => contentVisible.value = !contentVisible.value;
</script>
