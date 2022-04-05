<template>
    <div class="py-1 flex justify-between text-lg">
        <div>{{ label }}</div>
        <div class="font-semibold">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    }
});
</script>
