<template>
    <div class="flex">
        <button
            @click="decreaseYear"
            class="p-2 block flex-1 text-gray-50"
        >
            &laquo; {{ props.modelValue - 1 }}
        </button>
        <button
            class="p-2 font-bold flex-1 mx-1 text-gray-50"
        >
            {{ props.modelValue }}
        </button>
        <button
            @click="increaseYear"
            class="p-2 flex-1 text-gray-50"
        >
            {{ props.modelValue + 1 }} &raquo;
        </button>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
});

const increaseYear = () => emit('update:modelValue', props.modelValue + 1);
const decreaseYear = () => emit('update:modelValue', props.modelValue - 1);
</script>
